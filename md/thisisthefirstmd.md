---
scenario:
  id: basic-scenario
  title: foo
  description: Fancy Description
  keepalive_duration: 15m
  pause_duration: 1h
  pauseable: true
vm:
  - name: master
    type: hcloud
  - name: node1 
    type: hcloud
---

# Hallo Welt
## Anfang


Guck mal hier, so kann man was ausführen:
```ctr:node01
cat /etc/*ase
```



Wenn man mal die IP eines Nodes braucht:
${vminfo:node01:public_ip}


<iframe width="350" height="315" src="https://www.youtube.com/embed/4ht22ReBjno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Hallo Welt 2
## Anfang
Hier steht dann ganz einfach nur weiteres Zeug

# Überschrift 3

Auch hier kann man Zeug schreiben. Das sollte dann der dritte Part sein