#!/usr/bin/env python3
"""Render a simple transparent PNG version of the friendly robot vector using stdlib only."""
import math, struct, zlib
W,H=4500,5400
img=bytearray(W*H*4)

def blend_px(x,y,color,a=1.0):
    if x<0 or y<0 or x>=W or y>=H or a<=0: return
    i=(y*W+x)*4
    sr,sg,sb,sa=color
    aa=(sa/255)*a
    da=img[i+3]/255
    outa=aa+da*(1-aa)
    if outa<=0: return
    img[i]=int((sr*aa+img[i]*da*(1-aa))/outa)
    img[i+1]=int((sg*aa+img[i+1]*da*(1-aa))/outa)
    img[i+2]=int((sb*aa+img[i+2]*da*(1-aa))/outa)
    img[i+3]=int(outa*255)

def smoothstep(edge0, edge1, x):
    if edge0==edge1: return 1.0 if x>=edge1 else 0.0
    t=max(0,min(1,(x-edge0)/(edge1-edge0)))
    return t*t*(3-2*t)

def rounded_rect_sdf(px,py,x,y,w,h,r):
    cx=x+w/2; cy=y+h/2
    qx=abs(px-cx)-(w/2-r); qy=abs(py-cy)-(h/2-r)
    return math.hypot(max(qx,0),max(qy,0))+min(max(qx,qy),0)-r

def fill_rr(x,y,w,h,r,color):
    pad=4
    for yy in range(max(0,int(y-pad)), min(H,int(y+h+pad))):
      for xx in range(max(0,int(x-pad)), min(W,int(x+w+pad))):
        d=rounded_rect_sdf(xx+0.5,yy+0.5,x,y,w,h,r)
        a=1-smoothstep(-1.5,1.5,d)
        if a>0: blend_px(xx,yy,color,a)

def stroke_rr(x,y,w,h,r,sw,color):
    pad=sw/2+4
    for yy in range(max(0,int(y-pad)), min(H,int(y+h+pad))):
      for xx in range(max(0,int(x-pad)), min(W,int(x+w+pad))):
        d=abs(rounded_rect_sdf(xx+0.5,yy+0.5,x,y,w,h,r))-sw/2
        a=1-smoothstep(-1.5,1.5,d)
        if a>0: blend_px(xx,yy,color,a)

def circle(cx,cy,r,color):
    for yy in range(max(0,int(cy-r-3)), min(H,int(cy+r+3))):
      for xx in range(max(0,int(cx-r-3)), min(W,int(cx+r+3))):
        d=math.hypot(xx+0.5-cx,yy+0.5-cy)-r
        a=1-smoothstep(-1.5,1.5,d)
        if a>0: blend_px(xx,yy,color,a)

def capsule(x1,y1,x2,y2,r,color):
    minx,maxx=int(min(x1,x2)-r-4), int(max(x1,x2)+r+4)
    miny,maxy=int(min(y1,y2)-r-4), int(max(y1,y2)+r+4)
    dx=x2-x1; dy=y2-y1; l2=dx*dx+dy*dy
    for yy in range(max(0,miny), min(H,maxy)):
      for xx in range(max(0,minx), min(W,maxx)):
        if l2:
          t=max(0,min(1,((xx+0.5-x1)*dx+(yy+0.5-y1)*dy)/l2))
        else: t=0
        px=x1+t*dx; py=y1+t*dy
        d=math.hypot(xx+0.5-px,yy+0.5-py)-r
        a=1-smoothstep(-1.5,1.5,d)
        if a>0: blend_px(xx,yy,color,a)

def bezier(p0,p1,p2,p3,width,color,steps=120):
    last=p0
    for i in range(1,steps+1):
      t=i/steps
      mt=1-t
      x=mt**3*p0[0]+3*mt*mt*t*p1[0]+3*mt*t*t*p2[0]+t**3*p3[0]
      y=mt**3*p0[1]+3*mt*mt*t*p1[1]+3*mt*t*t*p2[1]+t**3*p3[1]
      capsule(last[0],last[1],x,y,width/2,color)
      last=(x,y)

NAVY=(7,24,39,255); INNER=(12,37,56,255); CYAN=(16,217,255,255); CYAN_D=(22,76,99,255); AMBER=(255,180,59,255); CREAM=(255,226,165,255); CORAL=(255,111,97,230)
# antenna and ears
capsule(2250,1200,2250,770,46,CYAN); circle(2250,650,145,AMBER); stroke_rr(2105,505,290,290,145,58,NAVY); circle(2298,598,42,CREAM)
fill_rr(865,2125,410,760,185,NAVY); stroke_rr(865,2125,410,760,185,92,CYAN); circle(1070,2505,82,AMBER)
fill_rr(3225,2125,410,760,185,NAVY); stroke_rr(3225,2125,410,760,185,92,CYAN); circle(3430,2505,82,AMBER)
# head
fill_rr(1080,1220,2340,2880,540,NAVY); stroke_rr(1080,1220,2340,2880,540,108,CYAN)
fill_rr(1285,1430,1930,2460,410,INNER); stroke_rr(1285,1430,1930,2460,410,34,CYAN_D)
# accents
capsule(1695,1805,2805,1805,35,CYAN); circle(1505,1805,78,CYAN); circle(2995,1805,78,CYAN)
# eyes
circle(1780,2475,245,AMBER); circle(2720,2475,245,AMBER); circle(1780,2475,118,(7,24,39,224)); circle(2720,2475,118,(7,24,39,224)); circle(1695,2385,52,CREAM); circle(2635,2385,52,CREAM)
# smile and cheeks
bezier((1750,3150),(1950,3405),(2550,3405),(2750,3150),112,CYAN,90)
circle(1545,3025,60,CORAL); circle(2955,3025,60,CORAL)
# chin/bolts
capsule(1770,3705,2730,3705,40,AMBER); capsule(1970,3890,2530,3890,26,(16,217,255,184))
for x,y,c in [(1435,1575,AMBER),(3065,1575,AMBER),(1435,3745,CYAN),(3065,3745,CYAN)]: circle(x,y,44,c)
# write png
raw = b''.join(b'\x00'+img[y*W*4:(y+1)*W*4] for y in range(H))
def chunk(t,d): return struct.pack('>I',len(d))+t+d+struct.pack('>I',zlib.crc32(t+d)&0xffffffff)
png=b'\x89PNG\r\n\x1a\n'+chunk(b'IHDR',struct.pack('>IIBBBBB',W,H,8,6,0,0,0))+chunk(b'IDAT',zlib.compress(raw,6))+chunk(b'IEND',b'')
open('assets/images/tshirts/friendly-robot-face-tshirt-transparent-4500x5400.png','wb').write(png)
print('wrote PNG', W, H, len(png))
