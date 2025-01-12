---
lang: 'en'
slug: '/2794D5'
---

> FFmpeg is a free, open-source software project comprising a suite of libraries and programs for handling video, audio, and other multimedia files and streams. At its core is the command-line ffmpeg tool, designed for processing video and audio files. It is widely used for format transcoding, basic editing (trimming and concatenation), video scaling, video post-production effects, and standards compliance (SMPTE, ITU) [FFmpeg](https://en.wikipedia.org/wiki/FFmpeg)

## Converting MOV to MP4

- ([[Remux]]ing, No "Encoding")
- Runs super fast (less than a second)

```bash
ffmpeg -I file.mov -c copy out.mp4
```
