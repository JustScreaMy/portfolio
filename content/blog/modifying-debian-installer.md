---
title: "Modifying debian installer"
description: "Trying to modify debian installer for quicker installations"
---
## Lost here
- debiancd
- live-build

## A chance?
- preseeding
- https://web.archive.org/web/20100211124904/http://kitenet.net/~joey/d-i/preseed/
- https://web.archive.org/web/20150914170955/https://www.debian-administration.org/article/394/Automating_new_Debian_installations_with_preseeding
- https://www.debian.org/releases/stable/amd64/apb.en.html

## HACKY CHANCE?
- https://d-i.debian.org/doc/internals/ch03.html
- https://www.cyberciti.biz/faq/how-to-extract-a-deb-file-without-opening-it-on-debian-or-ubuntu-linux/
- udeb?
- dists/bookworm/main/debian-installer/binary-amd64
	- this might need to be a lot of hacky, but I have an idea! Modifying the actuall debian installer to
	allow us to ask the user if he wants to additionally install our own "package set" after tasksel would be an excellent option!
	- but i need to find out a few things:
		- [ ] How to package the .udeb
		- [ ] Where should i put it
			- holy shit this might be an option to use the `live-build` I have thought would be shit because it "only"
			supports creating live CD
				- https://live-team.pages.debian.net/live-manual/html/live-manual/customizing-installer.en.html#649
