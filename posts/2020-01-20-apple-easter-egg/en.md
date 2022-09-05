---
title: "Apple's Easter Egg"
date: 2020-01-20
authors: anaclumos
slug: '/4512BD'
---

I recently found this:

```
This is just a thought. But it might be nice to have some sort
of easter egg message in here for the hard core Apple fans that
will stop the video.

01010011 01101111 00100000 01111001 01101111 01110101
00100000 01110100 01101111 01101111 01101011 00100000
01110100 01101000 01100101 00100000 01110100 01101001
01101101 01100101 00100000 01110100 01101111 00100000
01110100 01110010 01100001 01101110 01110011 01101100
01100001 01110100 01100101 00100000 01110100 01101000
01101001 01110011 00111111 00100000

01010111 01100101 00100000 01101100 01101111 01110110
01100101 00100000 01111001 01101111 01110101 00101110
```

So I made a short script.

```pyyhon
egg = '''
01010011 01101111 00100000 01111001 01101111 01110101
00100000 01110100 01101111 01101111 01101011 00100000
01110100 01101000 01100101 00100000 01110100 01101001
01101101 01100101 00100000 01110100 01101111 00100000
01110100 01110010 01100001 01101110 01110011 01101100
01100001 01110100 01100101 00100000 01110100 01101000
01101001 01110011 00111111 00100000

01010111 01100101 00100000 01101100 01101111 01110110
01100101 00100000 01111001 01101111 01110101 00101110
'''.split()

for e in egg:
    print(chr(int(e,2)), end="")
print()
```

It said...

> So you took the time to translate this?
> We love you.