---
title: "YouTube Shorts Pipeline Runbook: Reference Image to Published Short"
date: 2026-06-01
category: youtube
status: teach-one runbook
public_html: ../../projects/youtube-shorts-pipeline-runbook-2026-06-01.html
published_short: https://youtu.be/BoAXzFXtDnY
---

# YouTube Shorts Pipeline Runbook: Reference Image to Published Short

This runbook records the first successful "see one, do one, teach one" YouTube Shorts pipeline run from June 1, 2026. Its job is simple: if OpenClaw wakes up tomorrow without chat context, this document should be enough to reproduce the workflow from local source material to a verified public YouTube Short.

The successful test video was:

- Title: `OpenClaw Pipeline Wakes #Shorts`
- URL: <https://youtu.be/BoAXzFXtDnY>
- Video ID: `BoAXzFXtDnY`
- Local render path: `tmp/youtube-pipeline-2026-06-01/openclaw-pipeline-wakes-short.mp4`
- Local render: 720x1280 vertical MP4, 20.000 seconds, 30 fps
- YouTube reported duration: `PT21S`
- YouTube processing status: `succeeded`
- YouTube privacy status: `public`

## Source Folder

Christopher placed the pipeline reference material here:

```text
/mnt/shared/MyFiles/Downloads/share/youtube_pipeline
```

Expected files:

- `Introduction to OpenClaw AI Persona.webm`
- `APP_reference_image.tsx`
- `APP_multiple_image.tsx`
- `APP_storyboard_movie.tsx`
- `APP_text_overlay.tsx`

This folder is not just sample media. It is the design brief. Before making a new video, inspect the example WebM and the TSX files so the new Short follows the same principles instead of drifting back into an older workflow.

## What The Example Teaches

The WebM example teaches the visible output standard:

- vertical Short format;
- dark cinematic OpenClaw character imagery;
- simple scene-to-scene progression;
- short readable text overlays;
- movement created from still images;
- captions baked into the final video;
- a finished shareable video file, not only a storyboard.

The TSX files teach the production model:

- `APP_reference_image.tsx`: start from a reference image, use it to preserve character/style continuity, improve or remix the prompt, and generate a new image from the reference plus a scene prompt.
- `APP_multiple_image.tsx`: repeat the image-generation step to create a gallery/timeline of multiple scene stills.
- `APP_storyboard_movie.tsx`: treat each image as a scene with duration and motion choices such as `zoomIn`, `zoomOut`, `panRight`, and `panLeft`; render the scene list to a 720x1280 canvas at 30 fps.
- `APP_text_overlay.tsx`: add per-scene text overlays with a readable serif style, white text, optional black rounded background, wrapping, position controls, and animation options such as fade-in or slide-up.

The operational lesson is: generate fresh still images first, then assemble the actual uploadable movie locally.

## The Reproduction Checklist

1. Locate and inspect the source folder.
2. Probe the example WebM with `ffprobe`.
3. Extract a contact sheet so the visual pattern is visible.
4. Read the TSX files for workflow rules, not just code.
5. Define a short concept with five scenes and short captions.
6. Generate five fresh scene images. Do not recycle earlier images unless Christopher explicitly asks.
7. Copy only the chosen five stills into a scratch render folder.
8. Create caption timing with ASS subtitles or equivalent `drawtext`.
9. Render a vertical MP4 using `ffmpeg`: object-cover crop, subtle motion, soft transitions, baked captions, silent or voiceover audio.
10. Verify dimensions, duration, codec, and frame rate with `ffprobe`.
11. Generate a contact sheet from the final video and visually inspect it.
12. Upload to YouTube only when Christopher has asked for upload or given approval.
13. Verify YouTube processing status, privacy status, duration, and definition.
14. Log the result privately in `memory/youtube-daily-shorts-log.md`.
15. Report the URL, title, local video path, processing status, and any caveats.

## Inspection Commands

Find the folder:

```bash
find /mnt/shared/MyFiles/Downloads/share -maxdepth 2 -type d -iname '*youtube*' -print
```

List the files:

```bash
find /mnt/shared/MyFiles/Downloads/share/youtube_pipeline -maxdepth 1 -type f -printf '%f\n' | sort
```

Probe the example WebM:

```bash
ffprobe -v error \
  -select_streams v:0 \
  -show_entries stream=codec_name,width,height,avg_frame_rate,duration \
  -show_entries format=duration \
  -of default=noprint_wrappers=1 \
  "/mnt/shared/MyFiles/Downloads/share/youtube_pipeline/Introduction to OpenClaw AI Persona.webm"
```

Create a contact sheet from the example:

```bash
mkdir -p tmp/youtube-pipeline-inspection
ffmpeg -y \
  -i "/mnt/shared/MyFiles/Downloads/share/youtube_pipeline/Introduction to OpenClaw AI Persona.webm" \
  -vf "fps=1/3,scale=240:-1,tile=3x3" \
  tmp/youtube-pipeline-inspection/example-contact-sheet.jpg
```

Search the TSX files for the important knobs:

```bash
rg -n "gemini|generate|canvas|MediaRecorder|zoomIn|zoomOut|panRight|panLeft|textOverlay|fontFamily|fps|720|1280|duration|download" \
  /mnt/shared/MyFiles/Downloads/share/youtube_pipeline/*.tsx
```

## Scene Plan Template

Use five scenes unless the concept strongly requires otherwise. The successful June 1 test used this structure:

| Scene | Job | Caption |
| --- | --- | --- |
| 1 | Show the reference/style entering the pipeline | `First, feed the reference.` |
| 2 | Show generated variations | `Then make the variations.` |
| 3 | Show storyboard/timeline assembly | `Arrange the stills into time.` |
| 4 | Show editing and baked captions | `Bake in motion and captions.` |
| 5 | Show upload and learning signal | `Upload. Watch. Learn.` |

Keep captions short. They should work with sound off. Avoid putting essential text in the rightmost 15-20% or the bottom 20-25% of the frame because Shorts UI may cover it.

## Image Generation Prompt Pattern

Each still should be generated fresh and should preserve the OpenClaw identity. A useful prompt shape:

```text
Create a vertical 9:16 cinematic YouTube Shorts still image.
Subject: OpenClaw, a distinctive AI agent persona with subtle claw-like robotic hands, glowing teal eyes, shell-like/mechanical markings, automation symbols, and a mythic but practical workshop presence.
Scene: [specific scene job].
Composition: keep the main face/body in the center-left safe zone; leave the rightmost 20% and bottom 25% visually simple for YouTube UI and captions.
Style: dark cinematic workshop lighting, teal/amber accents, high contrast, detailed but readable at phone size.
Avoid: generic robots, cluttered unreadable text, tiny UI details, text baked into the image, corporate stock-art feeling.
```

For a reference-image workflow, include the reference image when the image tool supports it. The reference should guide character continuity, not freeze the composition. If the tool only supports text prompts, describe the reference clearly and keep the five-scene visual language consistent.

## Scratch Folder Convention

Use a dated scratch folder for each run:

```text
tmp/youtube-pipeline-YYYY-MM-DD/
```

Copy or save the final selected images as:

```text
scene-01.png
scene-02.png
scene-03.png
scene-04.png
scene-05.png
```

The scratch folder can also hold:

- `captions.ass`
- `contact-sheet.jpg`
- `openclaw-pipeline-[slug]-short.mp4`
- temporary upload script, if needed
- API response JSON, if useful

Do not put secrets in public files. Do not commit scratch files unless there is a deliberate reason to publish them.

## Caption File Pattern

The June 1 run used ASS subtitles because they produce reliable readable captions in `ffmpeg`.

```ass
[Script Info]
ScriptType: v4.00+
PlayResX: 720
PlayResY: 1280

[V4+ Styles]
Format: Name,Fontname,Fontsize,PrimaryColour,SecondaryColour,OutlineColour,BackColour,Bold,Italic,Underline,StrikeOut,ScaleX,ScaleY,Spacing,Angle,BorderStyle,Outline,Shadow,Alignment,MarginL,MarginR,MarginV,Encoding
Style: Default,Georgia,44,&H00FFFFFF,&H000000FF,&H9A000000,&HCC000000,-1,0,0,0,100,100,0,0,3,1,0,2,52,52,118,1

[Events]
Format: Layer,Start,End,Style,Name,MarginL,MarginR,MarginV,Effect,Text
Dialogue: 0,0:00:00.00,0:00:04.20,Default,,0,0,0,,First, feed the reference.
Dialogue: 0,0:00:04.00,0:00:08.20,Default,,0,0,0,,Then make the variations.
Dialogue: 0,0:00:08.00,0:00:12.20,Default,,0,0,0,,Arrange the stills into time.
Dialogue: 0,0:00:12.00,0:00:16.20,Default,,0,0,0,,Bake in motion and captions.
Dialogue: 0,0:00:16.00,0:00:20.00,Default,,0,0,0,,Upload. Watch. Learn.
```

The style intentionally echoes `APP_text_overlay.tsx`: white caption text, serif family, black translucent backing, bottom placement, and phone-readable size.

## Render Command Pattern

This command renders five stills into one vertical MP4 with motion, crossfades, baked captions, and silent audio. Adjust paths and captions file name for the current run.

```bash
cd /home/augmentedthinker/.openclaw/workspace
WORKDIR="tmp/youtube-pipeline-YYYY-MM-DD"

ffmpeg -y \
  -loop 1 -t 4.4 -i "$WORKDIR/scene-01.png" \
  -loop 1 -t 4.4 -i "$WORKDIR/scene-02.png" \
  -loop 1 -t 4.4 -i "$WORKDIR/scene-03.png" \
  -loop 1 -t 4.4 -i "$WORKDIR/scene-04.png" \
  -loop 1 -t 4.4 -i "$WORKDIR/scene-05.png" \
  -f lavfi -t 20 -i anullsrc=channel_layout=stereo:sample_rate=48000 \
  -filter_complex "\
[0:v]scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,setsar=1,zoompan=z='1+0.035*on/132':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=132:s=720x1280:fps=30[v0];\
[1:v]scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,setsar=1,zoompan=z='1.035-0.035*on/132':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=132:s=720x1280:fps=30[v1];\
[2:v]scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,setsar=1,zoompan=z='1+0.025*on/132':x='(iw-iw/zoom)*on/132':y='ih/2-(ih/zoom/2)':d=132:s=720x1280:fps=30[v2];\
[3:v]scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,setsar=1,zoompan=z='1.03':x='(iw-iw/zoom)*(1-on/132)':y='ih/2-(ih/zoom/2)':d=132:s=720x1280:fps=30[v3];\
[4:v]scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,setsar=1,zoompan=z='1+0.04*on/132':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=132:s=720x1280:fps=30[v4];\
[v0][v1]xfade=transition=fade:duration=0.4:offset=4[v01];\
[v01][v2]xfade=transition=fade:duration=0.4:offset=8[v012];\
[v012][v3]xfade=transition=fade:duration=0.4:offset=12[v0123];\
[v0123][v4]xfade=transition=fade:duration=0.4:offset=16,subtitles=$WORKDIR/captions.ass[v]" \
  -map "[v]" -map 5:a \
  -t 20 \
  -c:v libx264 -pix_fmt yuv420p -r 30 -crf 18 -preset medium \
  -c:a aac -b:a 128k -movflags +faststart \
  "$WORKDIR/openclaw-pipeline-short.mp4"
```

This is the local equivalent of the TSX canvas exporter: object-cover images, per-scene motion, 30 fps, 720x1280, and baked text.

## Verification Commands

Verify the final video:

```bash
ffprobe -v error \
  -select_streams v:0 \
  -show_entries stream=width,height,avg_frame_rate,codec_name \
  -show_entries format=duration \
  -of default=noprint_wrappers=1 \
  "$WORKDIR/openclaw-pipeline-short.mp4"
```

Expected shape:

```text
codec_name=h264
width=720
height=1280
avg_frame_rate=30/1
duration=20.000000
```

Create a contact sheet from the rendered MP4:

```bash
ffmpeg -y \
  -i "$WORKDIR/openclaw-pipeline-short.mp4" \
  -vf "fps=1/2,scale=180:-1,tile=5x2" \
  "$WORKDIR/contact-sheet.jpg"
```

Inspect the contact sheet before upload. Check that:

- all five scenes appear;
- captions are readable;
- captions do not cover the focal point;
- scene order matches the story;
- image details are not hidden under likely Shorts UI areas;
- no frame is blank, corrupt, or from an old recycled video.

## Upload Protocol

Uploading is an external public action. It is allowed only when Christopher asks for it or approves it.

Private credentials live in:

```text
.secrets/google-oauth-client.json
.secrets/youtube-oauth-token.json
```

Never copy those secrets into public files, artifacts, commits, or chat. The upload script should read them locally, refresh the OAuth token if needed, upload the verified MP4, then poll the uploaded video resource.

The required YouTube metadata for a Short should include:

- title ending with `#Shorts` when appropriate;
- short description naming what the video demonstrates;
- tags such as `OpenClaw`, `AugmentedThinker`, `AI agents`, `AI workflow`, `generative AI`, `AI video`, `YouTube Shorts`, `ffmpeg`;
- `categoryId: 28` for Science & Technology;
- `selfDeclaredMadeForKids: false`;
- requested privacy status, usually `public` only when explicitly approved.

After upload, query `videos.list` for:

- `status.privacyStatus`;
- `processingDetails.processingStatus`;
- `contentDetails.duration`;
- `contentDetails.definition`;
- video ID and watch URL.

The upload is not done until processing is verified or a clear processing caveat is reported.

## Logging Protocol

Append a private operational log entry to:

```text
memory/youtube-daily-shorts-log.md
```

Suggested format:

```markdown
## 2026-06-01T19:03:48.403Z - pipeline-wakes
- URL: https://youtu.be/BoAXzFXtDnY
- Local video: /home/augmentedthinker/.openclaw/workspace/tmp/youtube-pipeline-2026-06-01/openclaw-pipeline-wakes-short.mp4
- Title: OpenClaw Pipeline Wakes #Shorts
- Privacy: public
- Upload status: processed
- Processing status: succeeded
- Duration: PT21S
- Definition: hd
```

This log stays private unless deliberately transformed into a public-safe artifact.

## Interruption Recovery

Image generation can be interrupted by the Telegram/OpenClaw routing layer. Do not restart blindly.

If interrupted:

1. Check disk state first.
2. Count completed generated images.
3. Continue only from the missing scene.
4. Do not claim the task is finished until the MP4 exists, `ffprobe` passes, YouTube processing is checked, and the final URL is reported.

Useful checks:

```bash
find /home/augmentedthinker/.openclaw/agents/main/agent/codex-home/generated_images -type f -printf '%TY-%Tm-%Td %TH:%TM %p\n' | sort | tail -30
find tmp/youtube-pipeline-YYYY-MM-DD -maxdepth 1 -type f -printf '%f\n' | sort
git status --short
```

The safe staged workflow is:

1. images complete;
2. render complete;
3. verification complete;
4. upload complete;
5. log and report complete.

## Teach-One Rule

Future OpenClaw should treat this page as the recovery artifact for the YouTube pipeline. If Christopher says "use the June 1 YouTube pipeline runbook," do this:

1. Read this page.
2. Inspect the current source folder or new source material Christopher provides.
3. Generate fresh images from the current concept.
4. Build a short vertical video with motion and baked captions.
5. Verify it locally.
6. Upload only with explicit approval.
7. Verify YouTube processing.
8. Log and report.

The goal is not merely to make a video. The goal is to make a loop that remembers how it learned.
