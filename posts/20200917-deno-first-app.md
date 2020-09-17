---
title: Deno: First App
excerpt: "A simple app to check out deno"
favicon: 🦕
tags: deno
---

I have a linus laptop.

```
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Ran Successfully with the following output

```
Deno was installed successfully to /home/name/.deno/bin/deno
Manually add the directory to your $HOME/.bash_profile (or similar)
  export DENO_INSTALL="/home/name/.deno"
  export PATH="$DENO_INSTALL/bin:$PATH"
Run '/home/averageonion/.deno/bin/deno --help' to get started
```

Edited the `~/.bashrc` as mentioned and compiled it using the `source ~/.bashrc`. Now the the `deno --version` works 🥳

```
deno --version
deno 1.4.0
v8 8.7.75
typescript 4.0.2
```

Installed the deno vscode extention to aid my lazy bum by clicking `ctrl+p` in vscode and entering `ext install denoland.vscode-deno`

I entered the following in my terminal and I gotta say I was pretty implressed 💃

```
$ deno run https://deno.land/std@0.69.0/examples/welcome.ts
Download https://deno.land/std@0.69.0/examples/welcome.ts
Check https://deno.land/std@0.69.0/examples/welcome.ts
Welcome to Deno 🦕
```

Well that was kinda quick unlike the `npm i node-stuff` 🍻

And now the `Hello World` program compiled with deno 🦕

```ts
/**
 * hello-world.ts
 */
function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
}

function hello(name: string): string {
  return "Hello " + capitalize(name);
}

console.log(hello("sTEFFIN"));
/**
 * Output:
 *
 * Hello Steffin
**/
```

That's all for today I suppose 🧐
