---
lang: 'en'
slug: '/50E78E'
---

- using multi-level page table can save space.
- example: for 32-bit virtual address, 1 GB physical memory, and 4 kB pages how many bits do we need for the frame number? 1GB = 30 physical address bits. 4KB is 12 offset bits. Thus we need 30-12 = 18 bits for the frame number.
- but this multi-level can also be very expensive, because we need to lookup that many times
  - potential solution: cache this! called **translation look-aside buffers**.
- Similar to [[Cache Average Access Time]],

$$
T_\text{Translation} = T_\text{TLB Lookup} + (1 - P_\text{TLB Hit}) \times T_\text{Page Table Walk}
$$
