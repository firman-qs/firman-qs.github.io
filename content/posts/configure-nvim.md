+++
title = "My Neovim Setup with Lazy.nvim Plugin Manager"
date = "2023-11-09"
description = "bytheway editor"

[taxonomies]
tags = ["neovim", "lazy.nvim", "dotfiles", "plugin management"]

[extra]
comment = true
+++

Neovim has become my go-to editor for everything from coding to writing LaTeX
documents. I recently restructured my config using
[`lazy.nvim`](https://github.com/folke/lazy.nvim), a fast, modern plugin
manager written in Lua. In this post, I'll walk through how I organized my
Neovim setup and how you can do the same.

## 🧱 Project Structure

Here's the directory structure of my `~/.config/nvim`:

```text
.
├── init.lua
├── lazy-lock.json
├── lua
    ├── plugins
    │   ├── ai.lua
    │   ├── autocompletion.lua
    │   ├── autoformat.lua
    │   ├── buffers-or-tabs.lua
    │   ├── dap.lua
    │   ├── filemanager.lua
    │   ├── garbage-day.lua
    │   ├── git.lua
    │   ├── latex.lua
    │   ├── lsp.lua
    │   ├── mini.lua
    │   ├── multicursors.lua
    │   ├── plugins.lua
    │   ├── rust.lua
    │   ├── session.lua
    │   ├── surround.lua
    │   ├── telescope.lua
    │   ├── theme.lua
    │   ├── trouble.lua
    │   ├── typst.lua
    │   ├── ui.lua
    │   └── whichkey.lua
    └── settings
        └── init.lua
```


## Setting Up `init.lua`

The `init.lua` file is the heart of a Neovim configuration. It’s the first
thing Neovim loads, and in my setup, it handles:

- global settings
- bootstrapping the plugin manager (`lazy.nvim`)
- custom UI tweaks

---

### Load Global Settings

```lua
require("settings")
```

### Bootstrap `lazy.nvim`

Before we load any plugins, we make sure the `lazy.nvim` plugin manager is installed:

```lua
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not (vim.uv or vim.loop).fs_stat(lazypath) then
  local lazyrepo = "https://github.com/folke/lazy.nvim.git"
  local out = vim.fn.system({
    "git", "clone", "--filter=blob:none", "--branch=stable", lazyrepo, lazypath
  })
  if vim.v.shell_error ~= 0 then
    error("Error cloning lazy.nvim:\n" .. out)
  end
end
vim.opt.rtp:prepend(lazypath)
```
This block checks whether lazy.nvim exists in the expected path. If not, it
clones the repository. That way, you can just git-clone your config and
everything sets up automatically.

### Load Plugins with Lazy.nvim
```lua
require("lazy").setup({
  { import = "plugins" },
}, {
  ui = {
    icons = vim.g.have_nerd_font and {} or {
      cmd = "⌘",
      config = "🛠",
      event = "📅",
      ft = "📂",
      init = "⚙",
      keys = "🗝",
      plugin = "🔌",
      runtime = "💻",
      require = "🌙",
      source = "📄",
      start = "🚀",
      task = "📌",
      lazy = "💤 ",
    },
  },
})
```
Here, I import all plugins from lua/plugins/, and customize the UI icons shown
by Lazy (especially handy if you're not using Nerd Fonts). The icons make the
plugin loading screen more expressive and readable.

### Optional: Set Terminal Background to Match Neovim

```lua
local modified = false
vim.api.nvim_create_autocmd({ "UIEnter", "ColorScheme" }, {
  callback = function()
    local normal = vim.api.nvim_get_hl(0, { name = "Normal" })
    if normal.bg then
      io.write(string.format("\027]11;#%06x\027\\", normal.bg))
      modified = true
    end
  end,
})

vim.api.nvim_create_autocmd("UILeave", {
  callback = function()
    if modified then
      io.write("\027]111\027\\")
    end
  end,
})
```


## Global Settings (`lua/settings/init.lua`)

This is where I define my personal Neovim preferences — everything from line
numbers to key mappings. By isolating these in `lua/settings/init.lua`, I keep
my `init.lua` clean and modular.

Let’s walk through what I’ve customized. 
It's self explanatory so I leave it to you

```lua
vim.g.mapleader = " "
vim.g.maplocalleader = " "

vim.opt.number = true            -- Absolute line numbers
vim.opt.relativenumber = false   -- I prefer absolute lines only
vim.opt.cursorline = false       -- Cursorline off to reduce visual noise
vim.opt.signcolumn = "yes"       -- Always show sign column
vim.opt.colorcolumn = "80"       -- Vertical ruler for code style
vim.opt.scrolloff = 4            -- Keep cursor centered with some margin
vim.opt.splitright = true
vim.opt.splitbelow = true
   
vim.g.have_nerd_font = true

vim.opt.mouse = "a"              -- Full mouse support
vim.opt.showmode = false         -- Hide "-- INSERT --", handled by statusline
vim.opt.clipboard = "unnamedplus" -- Share clipboard with OS

vim.opt.ignorecase = true
vim.opt.smartcase = true
vim.opt.hlsearch = true
vim.opt.inccommand = "split"

vim.opt.wrap = false
vim.opt.breakindent = true
vim.opt.smartindent = true
vim.opt.tabstop = 4
vim.opt.softtabstop = 4
vim.opt.shiftwidth = 4

vim.opt.updatetime = 250
vim.opt.timeoutlen = 300

vim.opt.undofile = true
vim.opt.undodir = os.getenv("HOME") .. "/.vim/undodir"
vim.opt.swapfile = false
vim.opt.backup = false

vim.opt.list = false
vim.opt.listchars = { tab = "» ", trail = "·", nbsp = "␣", eol = "󰌑" }
vim.opt.guicursor = ""

vim.keymap.set("n", "<Esc><Esc>", "<cmd>nohlsearch<CR>")
vim.keymap.set("n", "<Esc>", "<cmd>noh<CR>")

vim.keymap.set("n", "<leader>q", vim.diagnostic.setloclist, { desc = "Open diagnostic [Q]uickfix list" })

vim.keymap.set({ "n", "i" }, "<C-s>", vim.cmd.w, { desc = "Save File" })
vim.keymap.set("n", "<leader>fs", vim.cmd.w, { desc = "Save File" })

vim.keymap.set("t", "<Esc><Esc>", "<C-\\><C-n>", { desc = "Exit terminal mode" })

vim.keymap.set("n", "<A-k>", ":m -2<CR>")
vim.keymap.set("n", "<A-j>", ":m +1<CR>")
vim.keymap.set("v", "<A-k>", ":m '<-2<CR>gv=gv")
vim.keymap.set("v", "<A-j>", ":m '>+1<CR>gv=gv")

```

### Optional: Yank Highlighting
```lua
vim.api.nvim_create_autocmd("TextYankPost", {
  desc = "Highlight when yanking (copying) text",
  group = vim.api.nvim_create_augroup("kickstart-highlight-yank", { clear = true }),
  callback = function()
    vim.highlight.on_yank()
  end,
})
```


