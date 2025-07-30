+++
title = "Hacking on Xmonad"
date = "2025-08-09"
description = "Nothing special, just XMonad rice"

[taxonomies]
tags=["linuxrice", "documentation"]

[extra]
comment = true
+++

# ABOUT

Originally, this was my old archlinux [DTOS](https://distro.tube/dtos/)
configuration, but now i am on fedora (update: i am back [home](https://archlinux.org/)). I have tested on my fedora and it
works fine. For other distributions it should be the same, just complete
the necessary packages. I'll try to give a little guidance.

`Note` Before you go and copy my config, read the section below for the
dependencies and short tutorial to get started. if I didn't miss
anything, this should be enough to get your linux to use this xmonad
configuration.

Credit: [<https://xmonad.org>](https://xmonad.org/),
[<https://gitlab.com/dtos>](https://gitlab.com/dtos)

# Documentation

> <https://xmonad.org/documentation.html> What I will tell you next, all
> come from the documentation. Documentation is the most important thing
> when you learn something, whether it's a window manager, programming
> language, etc. Here are some links to the xmonad documentation:
> 
> -   [<https://xmonad.org/documentation.html>](https://xmonad.org/documentation.html)
>     Documentation home page.
> -   [<https://xmonad.org/INSTALL.html>](https://xmonad.org/INSTALL.html)
>     On how to install xmonad.
> -   Hackage Documentation, It contains further documentation, like what
>     libraries you can use, how to use them, more like how to use haskell
>     for xmonad.
>     -   [<https://hackage.haskell.org/package/xmonad>](https://hackage.haskell.org/package/xmonad)
>     -   [<https://hackage.haskell.org/package/xmonad-contrib>](https://hackage.haskell.org/package/xmonad-contrib)

# Installing xmonad

In general, the process is the same, the difference is which method you
use. Either use your distro's package manager, or build from source with
cabal or stack. This time I will use the package manager, because I find
it easier and use less space. Of course if you want to play with haskell
more deeply, using stack or cabal is great.

1.  Installing dependencies

    The dependencies are the same, but the names may differ in different
    package managers. I will give an example for Fedora, for other
    distros, you can open the [install xmonad documentation
    link](https://xmonad.org/INSTALL.html) that I provided before. Run
    in terminal

    ``` bash
    sudo dnf update &&
    sudo dnf install git libX11-devel libXft-devel libXinerama-devel libXrandr-devel libXScrnSaver-devel
    ```

2.  Make xmonad config directory

    This is where you store all configurations. The new xmonad saves its
    configuration in \~/.config/xmonad, while the older version is in
    \~/.xmonad. In my case, the fedora package manager provided xmonad
    which seemed to be older, so I saved the configuration in
    \~/.xmonad. If you are using a distro like arch linux you will
    probably use \~/.config/xmonad instead. Just test which one works
    later. To make configuration directory:

    ``` bash
    # for latest version:
    mkdir ~/.config/xmonad
    # or for older version:
    mkdir ~/.xmonad
    ```

3.  Installing xmonad

    Three things you need to install, xmonad itself, xmonad-contrib
    (Community-maintained tiling algorithms and extension modules for
    xmonad), and the bar (unless you don't want bar 😁). The bar that is
    commonly used in conjunction with xmonad is xmobar and
    [distrotube](https://youtube.com/playlist?list=PL5--8gKSku144jIsizdhdxq_fKTmBBGBA)
    has a great tutorial on this. The other bar, which I'll be using in
    this configuration is polybar, so we'll be installing that as well.
    On fedora:

    ``` bash
    sudo dnf install xmonad ghc-xmonad-contrib polybar
    ```

    Remember, the package name may be different in each package manager
    that your distro uses. Use package search to help you, for example,
    on arch linux you can use `pacman -Ss pkg-name-you-are-looking-for`,
    or on ubuntu: `~apt search pkg-name-you-are-looking-for`. if i
    remember correctly, on arch linux the names are xmonad,
    xmonad-contrib (without ghc-), and polybar. So on an arch based
    distro you can do:

    ``` bash
    sudo pacman -S xmonad xmonad-contrib polybar
    ```

4.  Another thing to install

    1.  Dmenu

        Xmonad uses dmenu by default, you can copy my patched dmenu (see
        [my dmenu build](https://github.com/firman-qs/.dotfiles)) and
        install it or install the plain version
        (<https://tools.suckless.org/dmenu>) and patch it yourself. Of
        course you can use rofi or another launcher, just set it in
        keybinding later.

    2.  Dbus

        To easily display XMonad status in polybar we need DBus
        monitoring and i use
        [xintron/xmonad-log](https://github.com/xintron/xmonad-log) for
        that. Xmonad-log allows us to send status over DBus using
        XMonad's DynamicLog to any application that support executing
        custom scripts such as polybar.

        1.  First we need to install
            [dbus](https://hackage.haskell.org/package/dbus). Again, i'm
            using fedora here:

        ``` bash
        sudo dnf install ghc-dbus ghc-dbus-devel
        ```

        1.  Next, we need to install golang to build xmonad-log:

            ``` bash
            sudo dnf install golang
            ```

        2.  Then we clone the xmonad-log repository. On [its
            github](https://github.com/xintron/xmonad-log) it says we
            need to clone it to
            `$GOPATH/src/github.com/xintron/xmonad-log`. `$GOPATH` is a
            variable used by Go to reference the location where all
            project folders are stored. However, Setup Go project using
            `$GOPATH` is not recommended for the latest version of Go,
            instead we use Go Modules. So just clone to our home
            directory, or any other directory you want.

            ``` bash
            # clone to home directory
            git clone https://github.com/xintron/xmonad-log.git ~/xmonad-log
            # or clone to another directory
            git clone https://github.com/xintron/xmonad-log.git ~/path/to/another/dir/xmonad-log
            ```

        3.  Now go to xmonad-log directory which we have clone, by
            ordering:

            ``` bash
            cd xmonad-log
            ```

        4.  Once we're on xmonad-log directory, then we initilize new Go
            project by:

            ``` bash
            go mod init xmonad-log
            ```

        5.  Then add dependencies to current module and install them,
            by:

            ``` bash
            go get xmonad-log
            ```

        6.  Now we build it

            ``` bash
            go build
            ```

        This will give you an xmonad-log binary in the directory. Move
        this to an appropriate directory in your $PATH.

# IMPORTS

These are Haskell modules that we must import so that we can use their
functions later in the config. We use `import` stetement for to import
modules. Qualified import makes the imported module only available in
qualified form, eg. it force an obligatory namespace qualifier to
imported identifiers. A qualified import allows us to use functions with
the same name from several modules. Because there is a namespace,
haskell doesn't get agitated.


```haskell
-- Base
import XMonad
import System.Directory
import System.IO (hClose, hPutStr, hPutStrLn)
import System.Exit (exitSuccess)
import qualified XMonad.StackSet as W

-- Actions
import XMonad.Actions.CopyWindow (kill1)
import XMonad.Actions.CycleWS (Direction1D(..), moveTo, shiftTo, toggleWS, WSType(..), nextScreen, prevScreen)
import XMonad.Actions.MouseResize
import XMonad.Actions.Promote
import XMonad.Actions.RotSlaves (rotSlavesDown, rotAllDown)
import XMonad.Actions.WindowGo (runOrRaise)
import XMonad.Actions.WithAll (sinkAll, killAll)
import qualified XMonad.Actions.Search as S

-- Data
import Data.Char (isSpace, toUpper)
import Data.Maybe (fromJust, isJust)
import Data.Monoid
import Data.Tree
import qualified Data.Map as M

-- Dbus
import qualified DBus as D
import qualified DBus.Client as D
import qualified Codec.Binary.UTF8.String as UTF8

-- Hooks
import XMonad.Hooks.DynamicLog
import XMonad.Hooks.EwmhDesktops
import XMonad.Hooks.ManageDocks (avoidStruts, docks, manageDocks, ToggleStruts(..))
import XMonad.Hooks.ManageHelpers (isFullscreen, doFullFloat, doCenterFloat)
import XMonad.Hooks.ServerMode
import XMonad.Hooks.SetWMName
import XMonad.Hooks.StatusBar
import XMonad.Hooks.StatusBar.PP
import XMonad.Hooks.WindowSwallowing
import XMonad.Hooks.WorkspaceHistory

-- Layouts
import XMonad.Layout.Accordion
import XMonad.Layout.GridVariants (Grid(Grid))
import XMonad.Layout.SimplestFloat
import XMonad.Layout.Spiral
import XMonad.Layout.ResizableTile
import XMonad.Layout.Tabbed
import XMonad.Layout.ThreeColumns

-- Layouts modifiers
import XMonad.Layout.LayoutModifier
import XMonad.Layout.LimitWindows (limitWindows, increaseLimit, decreaseLimit)
import XMonad.Layout.MultiToggle (mkToggle, single, EOT(EOT), (??))
import XMonad.Layout.MultiToggle.Instances (StdTransformers(NBFULL, MIRROR, NOBORDERS))
import XMonad.Layout.NoBorders
import XMonad.Layout.Renamed
import XMonad.Layout.ShowWName
import XMonad.Layout.Simplest
import XMonad.Layout.Spacing
import XMonad.Layout.SubLayouts
import XMonad.Layout.WindowArranger (windowArrange, WindowArrangerMsg(..))
import XMonad.Layout.WindowNavigation
import qualified XMonad.Layout.ToggleLayouts as T (toggleLayouts, ToggleLayout(Toggle))
import qualified XMonad.Layout.MultiToggle as MT (Toggle(..))

-- Utilities
import XMonad.Util.Dmenu
import XMonad.Util.EZConfig (additionalKeysP, mkNamedKeymap)
import XMonad.Util.Hacks (windowedFullscreenFixEventHook, javaHack, trayerAboveXmobarEventHook, trayAbovePanelEventHook, trayerPaddingXmobarEventHook, trayPaddingXmobarEventHook, trayPaddingEventHook)
import XMonad.Util.NamedActions
import XMonad.Util.NamedScratchpad
import XMonad.Util.NamedWindows (getName)
import XMonad.Util.Run (runProcessWithInput, safeSpawn, spawnPipe)
import XMonad.Util.SpawnOnce

-- Colorscheme Module, made using pywal template, and link it to ~/.xmonaad/lib/Colors directory using ln -s
import Colors.XmonadPywal
```

# VARIABLES

It's nice to assign values to stuff that you will use more than once in
the config. Setting values for things like font, terminal and editor
means you only have to change the value here to make changes globally.

``` haskell
-- Variables
myFont :: String
myFont = "xft:JetBrainsMono Nerd Font:regular:size=9:antialias=true:hinting=true"

myModMask :: KeyMask
myModMask = mod4Mask  -- Sets modkey to super/windows key

myTerminal :: String
myTerminal = "alacritty"  -- Sets default terminal

myBrowser :: String
myBrowser = "firefox "  -- Sets qutebrowser as browser

myEmacs :: String
myEmacs = "emacsclient -c -a 'emacs' "  -- Makes emacs keybindings easier to type

myEditor :: String
myEditor = "code"  -- Sets emacs as editor

myFileManager :: String
myFileManager = "nemo"  -- Sets emacs as editor

myBorderWidth :: Dimension
myBorderWidth = 2  -- Sets border width for windows

myNormColor :: String  -- Border color of normal windows
myNormColor   = background  -- This variable is imported from Colors.THEME

myFocusColor :: String  -- Border color of focused windows
myFocusColor  = color4  -- This variable is imported from Colors.THEME

mySoundPlayer :: String
mySoundPlayer = "ffplay -nodisp -autoexit "  -- The program that will play system sounds

-- just like his name, to count window
windowCount :: X (Maybe String)
windowCount = gets $ Just . show . length . W.integrate' . W.stack . W.workspace . W.current . windowset
```
# AUTOSTARTS

This is a program that automatically runs on startup or restarting
xmonad. We need to store it in `startupHook` on [main](./#main) method
(this similar to `main` in other languages, such as `c`). For now we
store it in `myStartupHook` first then put it later on `startupHook`.

``` haskell
myStartupHook :: X ()
myStartupHook = do
    spawnOnce (mySoundPlayer ++ startupSound)
    spawnOnce "picom"
    spawnOnce "nm-applet"
    spawnOnce "pasystray"
    spawnOnce "xset dpms 0 0 10800 & xss-lock -- slock &"
    spawn "/usr/bin/emacs --daemon"  -- emacs daemon for the emacsclient
    spawn "polybar mainbar-xmonad"
    spawnOnce "wal -R &"
    setWMName "LG3D"
```

# LAYOUTS

Defining the layouts that I want to have available. This require us to
import modules `XMonad.Layout`.

``` haskell
{- | Makes setting the spacingRaw simpler to write. The spacingRaw module adds
a configurable amount of space around windows.
-}
mySpacing :: Integer -> l a -> XMonad.Layout.LayoutModifier.ModifiedLayout Spacing l a
mySpacing i = spacingRaw False (Border i i i i) True (Border i i i i) True

{- | Below is a variation of the above except no borders are applied if fewer
than two windows. So a single window has no gaps.
-}
mySpacing' :: Integer -> l a -> XMonad.Layout.LayoutModifier.ModifiedLayout Spacing l a
mySpacing' i = spacingRaw True (Border i i i i) True (Border i i i i) True

{- Defining a bunch of layouts, many that I don't use. limitWindows n sets
maximum number of windows displayed for layout. mySpacing n sets the gap size
around the windows.
-}
tall = renamed [Replace "tall"]
    $ limitWindows 5
    $ addTabs shrinkText myTabTheme
    $ subLayout [] (smartBorders Simplest)
    $ mySpacing 4
    $ ResizableTall 1 (3/100) (1/2) []
monocle = renamed [Replace "monocle"]
    $ addTabs shrinkText myTabTheme
    $ subLayout [] (smartBorders Simplest)
    Full
floats = renamed [Replace "floats"]
    simplestFloat
grid = renamed [Replace "grid"]
    $ limitWindows 9
    $ addTabs shrinkText myTabTheme
    $ subLayout [] (smartBorders Simplest)
    $ mySpacing 4
    $ mkToggle (single MIRROR)
    $ Grid (16/10)
spirals = renamed [Replace "spirals"]
    $ limitWindows 9
    $ addTabs shrinkText myTabTheme
    $ subLayout [] (smartBorders Simplest)
    $ mySpacing' 4
    $ spiral (6/7)
threeCol = renamed [Replace "threeCol"]
    $ limitWindows 7
    $ addTabs shrinkText myTabTheme
    $ subLayout [] (smartBorders Simplest)
    $ ThreeCol 1 (3/100) (1/2)
{- | Mirror takes a layout and rotates it by 90 degrees.
So we are applying Mirror to the ThreeCol layout.
-}
threeRow = renamed [Replace "threeRow"]
    $ limitWindows 7
    $ addTabs shrinkText myTabTheme
    $ subLayout [] (smartBorders Simplest)
    $ Mirror
    $ ThreeCol 1 (3/100) (1/2)
{- | I cannot add spacing to this layout because it will
add spacing between window and tabs which looks bad.
-}
tabs = renamed [Replace "tabs"] $ tabbed shrinkText myTabTheme
tallAccordion = renamed [Replace "tallAccordion"] Accordion
wideAccordion = renamed [Replace "wideAccordion"] $ Mirror Accordion

-- setting colors for tabs layout and tabs sublayout.
myTabTheme = def
    { fontName             = myFont
    , activeColor          = color15
    , inactiveColor        = color8
    , activeBorderColor    = color15
    , inactiveBorderColor  = background
    , activeTextColor      = background
    , inactiveTextColor    = color0
    }

-- The layout hook
myLayoutHook = avoidStruts
    $ mouseResize
    $ windowArrange
    $ T.toggleLayouts floats
    $ mkToggle (NBFULL ?? NOBORDERS ?? EOT) myDefaultLayout
  where
    myDefaultLayout = smartBorders
        $ withBorder myBorderWidth
        $ configurableNavigation noNavigateBorders tall
            ||| noBorders monocle
            ||| floats
            ||| noBorders tabs
            ||| grid
            ||| spirals
            ||| threeCol
            ||| threeRow
            ||| tallAccordion
            ||| wideAccordion
```

# WORKSPACES

Thisi worspace configuration contains workspace name, how make custom
xmonad polybar-module clickable, and theme for workspace name on change
popup.

``` haskell
-- Workspace name
myWorkspaces :: [String]
myWorkspaces = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
{- | another worspace name that you can use:
    myWorkspaces =
    [ "dev"
    , "www"
    , "sys"
    , "doc"
    , "vbx"
    , "cht"
    , "mus"
    , "vid"
    , "trm"
    , "gfx"
    ]
-}

-- Make custom xmonad polybar module clickable
myWorkspaceIndices = M.fromList $ zipWith (,) myWorkspaces [1..]
{- | Basically we use xdotool (don't forget to install it) to press our
keybinding, when we do click to polybar xmonad workspace.
-}
clickable ws = "%{A:xdotool key super+" ++ show i ++ " &:}" ++ ws ++ "%{A}"
  where i = fromJust $ M.lookup ws myWorkspaceIndices

{- | Theme for showWName which prints current workspace when you change
workspaces. In order to make it work, on main method you need to have:
    , layoutHook = showWName' myShowWNameTheme $ myLayoutHook
instead of just:
    , layoutHook = myLayoutHook
-}
myShowWNameTheme :: SWNConfig
myShowWNameTheme = def
    { swn_font      = "xft:JetBrainsMono Nerd Font:bold:size=50"
    , swn_fade      = 1.0
    , swn_bgcolor   = "#1c1f24"
    , swn_color     = "#ffffff"
    }
```

# MANAGEHOOK

Sets some rules for certain programs. Examples include forcing certain
programs to always float, or to always appear on a certain workspace.
Forcing programs to a certain workspace with a doShift requires xdotool
if you are using clickable workspaces. You need the className or title
of the program. Use xprop to get this info.

``` haskell
{- | 'doFloat' forces a window to float. Useful for dialog boxes and such.
using 'doShift ( myWorkspaces !! 7)' sends program to workspace 8! I'm doing it
this way because otherwise I would have to write out the full name of my
workspaces and the names would be very long if using clickable workspaces.
-}
myManageHook :: XMonad.Query (Data.Monoid.Endo WindowSet)
myManageHook = composeAll
    [ className =? "confirm"        --> doFloat
    , className =? "file_progress"  --> doFloat
    , className =? "dialog"         --> doFloat
    , className =? "download"       --> doFloat
    , className =? "error"          --> doFloat
    , className =? "Gimp"           --> doFloat
    , className =? "notification"   --> doFloat
    , className =? "pinentry-gtk-2" --> doFloat
    , className =? "splash"         --> doFloat
    , className =? "toolbar"        --> doFloat
    , className =? "Yad"            --> doCenterFloat
    , title =? "Oracle VM VirtualBox Manager"   --> doFloat
    , title =? "Order Chain - Market Snapshots" --> doFloat
    , title =? "Mozilla Firefox"    --> doShift ( myWorkspaces !! 1 )
    , className =? "Brave-browser"  --> doShift ( myWorkspaces !! 1 )
    , className =? "mpv"            --> doShift ( myWorkspaces !! 7 )
    , className =? "Gimp"           --> doShift ( myWorkspaces !! 8 )
    , className =? "VirtualBox Manager" --> doShift  ( myWorkspaces !! 4 )
    , (className =? "firefox" <&&> resource =? "Dialog") --> doFloat
    , isFullscreen -->  doFullFloat
    ] <+> namedScratchpadManageHook myScratchPads
```

# SYSTEM SOUNDS

Available sounds that are part of the default
[dtos-sounds](https://gitlab.com/dtos/dtos-sounds) package include:

-   menu-01.mp3
-   menu-02.mp3
-   menu-03.mp3
-   shutdown-01.mp3
-   shutdown-02.mp3
-   shutdown-03.mp3
-   startup-01.mp3
-   startup-02.mp3
-   startup-03.mp3

``` haskell
soundDir = "/home/fqs/.config/dtos-sounds/"

startupSound  = soundDir ++ "startup-01.mp3"
shutdownSound = soundDir ++ "shutdown-01.mp3"
```

# NAMED ACTIONS

`NamedActions` is a wrapper for keybinding configuration that can list
the available keybindings. The following custom functions are used to
add `NamedActions` to our keybindings in the format that I desired.
`subTitle'` allows me to format the subtitle (`subKeys`) so that I can
prepend and/or append text to them. `showKeybindings` is a function that
pipes the output of our `NamedActions` into a GUI display program, such
as 'yad' or 'zenity'.

``` haskell
subtitle' :: String -> ((KeyMask, KeySym), NamedAction)
subtitle' x =
    ( (0,0)
    , NamedAction $ map toUpper $ sep ++ "\n-- " ++ x ++ " --\n" ++ sep
    ) where
        sep = replicate (6 + length x) '-'

showKeybindings :: [((KeyMask, KeySym), NamedAction)] -> NamedAction
showKeybindings x = addName "Show Keybindings" $ io $ do
    h <- spawnPipe "yad --text-info --fontname=\"JetBrainsMono Nerd Font 11\" --fore=#46d9ff back=#282c36 --center --geometry=1200x700 --title \"XMonad keybindings\""
    --hPutStr h (unlines $ showKm x) -- showKM adds ">>" before subtitles
    hPutStr h (unlines $ showKmSimple x) -- showKmSimple doesn't add ">>" to subtitles
    hClose h
    return ()
```

# KEYBINDINGS

This config use the
[Xmonad.Util.EZConfig](https://hackage.haskell.org/package/xmonad-contrib-0.17.1/docs/XMonad-Util-EZConfig.html)
module, that make keybindings to be written in simpler form. The
Super/Windows key is 'M' (the modkey), the ALT key is 'M1'. Shift is 'S'
and CTRL is 'C'. If you dont know what is the name of key actually is,
always refer to [EZConfig
documentation](https://hackage.haskell.org/package/xmonad-contrib-0.17.1/docs/XMonad-Util-EZConfig.html#v:additionalKeysP)
(for example, the backspace key is written as \<Backspace\>, note it is
enclosed in \<…\> and the initial letter is capitalized). Each group of
keybindings must have a `subKeys` heading, and each individual
keybinding must use `addName` to add a description. These headings and
descriptions are needed for the keybindings list that can be launched
with 'M-F1'.

`Note` will complete the table later, the key should be
self-explanatory. I will give you small example: "M-C-r" means you need
to press Modkey+Ctrl+r "M-x r" means you need to press Modkey+x, release
it, then press r

| A FEW KEYBINDINGS | ASSOCIATED ACTION |
|-------------------|-------------------|
| MODKEY + RETURN   | opens terminal    |

``` haskell
myKeys :: XConfig l0 -> [((KeyMask, KeySym), NamedAction)]
myKeys c =
    --(subtitle "Custom Keys":) $ mkNamedKeymap c $
    let subKeys str ks = subtitle' str : mkNamedKeymap c ks in
    subKeys "Xmonad Essentials"
    [ ("M-C-r", addName "Recompile XMonad"      $ spawn "xmonad --recompile")
    , ("M-S-<F5>", addName "Restart XMonad"     $ spawn "killall emacs; killall polybar; xmonad --restart")
    , ("M-S-q", addName "Quit XMonad"           $ sequence_ [spawn (mySoundPlayer ++ shutdownSound), io exitSuccess])
    , ("M-x",   addName "Quit XMonad"           $ spawn "dm-logout")
    , ("M-q",   addName "Kill focused window"   $ kill1)
    , ("M-S-q", addName "Kill all windows on WS"$ killAll)
    , ("M-d",   addName "Run prompt"            $ spawn "dm_run")
    , ("M-S-b", addName "Toggle bar show/hide"  $ sendMessage ToggleStruts)
    ]

    ^++^ subKeys "Switch to workspace"
    [ ("M-1", addName "Switch to workspace 1"   $ windows $ W.greedyView $ myWorkspaces !! 0)
    , ("M-2", addName "Switch to workspace 2"   $ windows $ W.greedyView $ myWorkspaces !! 1)
    , ("M-3", addName "Switch to workspace 3"   $ windows $ W.greedyView $ myWorkspaces !! 2)
    , ("M-4", addName "Switch to workspace 4"   $ windows $ W.greedyView $ myWorkspaces !! 3)
    , ("M-5", addName "Switch to workspace 5"   $ windows $ W.greedyView $ myWorkspaces !! 4)
    , ("M-6", addName "Switch to workspace 6"   $ windows $ W.greedyView $ myWorkspaces !! 5)
    , ("M-7", addName "Switch to workspace 7"   $ windows $ W.greedyView $ myWorkspaces !! 6)
    , ("M-8", addName "Switch to workspace 8"   $ windows $ W.greedyView $ myWorkspaces !! 7)
    , ("M-9", addName "Switch to workspace 9"   $ windows $ W.greedyView $ myWorkspaces !! 8)
    , ("M-0", addName "Switch to workspace 10"  $ windows $ W.greedyView $ myWorkspaces !! 9)
    ]

    ^++^ subKeys "Send window to workspace"
    [ ("M-S-1", addName "Send to workspace 1"   $ windows $ W.shift $ myWorkspaces !! 0)
    , ("M-S-2", addName "Send to workspace 2"   $ windows $ W.shift $ myWorkspaces !! 1)
    , ("M-S-3", addName "Send to workspace 3"   $ windows $ W.shift $ myWorkspaces !! 2)
    , ("M-S-4", addName "Send to workspace 4"   $ windows $ W.shift $ myWorkspaces !! 3)
    , ("M-S-5", addName "Send to workspace 5"   $ windows $ W.shift $ myWorkspaces !! 4)
    , ("M-S-6", addName "Send to workspace 6"   $ windows $ W.shift $ myWorkspaces !! 5)
    , ("M-S-7", addName "Send to workspace 7"   $ windows $ W.shift $ myWorkspaces !! 6)
    , ("M-S-8", addName "Send to workspace 8"   $ windows $ W.shift $ myWorkspaces !! 7)
    , ("M-S-9", addName "Send to workspace 9"   $ windows $ W.shift $ myWorkspaces !! 8)
    , ("M-S-0", addName "Send to workspace 10"  $ windows $ W.shift $ myWorkspaces !! 9)
    ]

    ^++^ subKeys "Move window to WS and go there"
    [ ("M-S-<Page_Up>", addName "Move window to next WS"    $ shiftTo Next nonNSP >> moveTo Next nonNSP)
    , ("M-S-<Page_Down>", addName "Move window to prev WS"  $ shiftTo Prev nonNSP >> moveTo Prev nonNSP)
    ]

    ^++^ subKeys "Window navigation"
    [ ("M-j", addName "Move focus to next window"               $ windows W.focusDown)
    , ("M-k", addName "Move focus to prev window"               $ windows W.focusUp)
    , ("M-m", addName "Move focus to master window"             $ windows W.focusMaster)
    , ("M-S-j", addName "Swap focused window with next window"  $ windows W.swapDown)
    , ("M-S-k", addName "Swap focused window with prev window"  $ windows W.swapUp)
    , ("M-S-m", addName "Swap focused window with master window"$ windows W.swapMaster)
    , ("M-<Backspace>", addName "Move focused window to master" $ promote)
    , ("M-S-,", addName "Rotate all windows except master"      $ rotSlavesDown)
    , ("M-S-.", addName "Rotate all windows current stack"      $ rotAllDown)
    ]

    {- | Dmenu scripts (dmscripts)
    In Xmonad and many tiling window managers, M-p is the default keybinding to
    launch dmenu_run, so I've decided to use M-p plus KEY for these dmenu scripts.
    -}
    ^++^ subKeys "Dmenu scripts"
    [ ("M-p h", addName "List all dmscripts"    $ spawn "dm-hub")
    , ("M-p b", addName "Set background"        $ spawn "dm-setbg")
    , ("M-p c", addName "Edit config files"     $ spawn "dm-confedit")
    , ("M-p m", addName "View manpages"         $ spawn "dm-man")
    , ("M-p o", addName "Store and copy notes"  $ spawn "dm-note")
    , ("M-p x", addName "Logout Menu"           $ spawn "dm-logout")
    , ("M-p r", addName "Listen to online radio"$ spawn "dm-radio")
    , ("M-p s", addName "Record Screen"         $ spawn "dm-record")
    , ("M-p w", addName "Search various engines"$ spawn "dm-websearch")
    , ("M-p n", addName "Connect Wifi"          $ spawn "dm-wifi")
    ]

    ^++^ subKeys "Favorite programs"
    [ ("M-<Return>", addName "Launch terminal"  $ spawn myTerminal)
    , ("M-b", addName "Launch web browser"      $ spawn myBrowser)
    , ("M-e", addName "Launch file manager"     $ spawn myFileManager)
    , ("M-s", addName "Launch file manager"     $ spawn "flameshot gui")
    , ("M-M1-h", addName "Launch htop"          $ spawn (myTerminal ++ " -e htop"))
    ]

    ^++^ subKeys "Monitors"
    [ ("M-.", addName "Switch focus to next monitor"    $ nextScreen)
    , ("M-,", addName "Switch focus to prev monitor"    $ prevScreen)
    ]

    -- Switch layouts
    ^++^ subKeys "Switch layouts"
    [ ("M-<Tab>", addName "Switch to next layout"   $ sendMessage NextLayout)
    , ("M-f", addName "Toggle noborders/full"       $ sendMessage (MT.Toggle NBFULL) >> sendMessage ToggleStruts)
    ]

    -- Window resizing
    ^++^ subKeys "Window resizing"
    [ ("M-h", addName "Shrink window"               $ sendMessage Shrink)
    , ("M-l", addName "Expand window"               $ sendMessage Expand)
    , ("M-M1-j", addName "Shrink window vertically" $ sendMessage MirrorShrink)
    , ("M-M1-k", addName "Expand window vertically" $ sendMessage MirrorExpand)
    ]

    -- Floating windows
    ^++^ subKeys "Floating windows"
    [ ("M-S-<Space>", addName "Toggle float layout" $ sendMessage (T.Toggle "floats"))
    , ("M-t", addName "Sink a floating window"      $ withFocused $ windows . W.sink)
    , ("M-S-t", addName "Sink all floated windows"  $ sinkAll)
    ]

    -- Increase/decrease spacing (gaps)
    ^++^ subKeys "Window spacing (gaps)"
    [ ("M-g j", addName "Decrease window spacing" $ decWindowSpacing 4)
    , ("M-g k", addName "Increase window spacing" $ incWindowSpacing 4)
    , ("M-g h", addName "Decrease screen spacing" $ decScreenSpacing 4)
    , ("M-g l", addName "Increase screen spacing" $ incScreenSpacing 4)
    ]

    -- Increase/decrease windows in the master pane or the stack
    ^++^ subKeys "Increase/decrease windows in master pane or the stack"
    [ ("M-S-<Up>", addName "Increase clients in master pane"   $ sendMessage (IncMasterN 1))
    , ("M-S-<Down>", addName "Decrease clients in master pane" $ sendMessage (IncMasterN (-1)))
    , ("M-=", addName "Increase max # of windows for layout"   $ increaseLimit)
    , ("M--", addName "Decrease max # of windows for layout"   $ decreaseLimit)
    ]

    {- | Sublayouts
    This is used to push windows to tabbed sublayouts, or pull them out of it.
    -}
    ^++^ subKeys "Sublayouts"
    [ ("M-C-h", addName "pullGroup L"           $ sendMessage $ pullGroup L)
    , ("M-C-l", addName "pullGroup R"           $ sendMessage $ pullGroup R)
    , ("M-C-k", addName "pullGroup U"           $ sendMessage $ pullGroup U)
    , ("M-C-j", addName "pullGroup D"           $ sendMessage $ pullGroup D)
    , ("M-C-m", addName "MergeAll"              $ withFocused (sendMessage . MergeAll))
    , ("M-C-u", addName "UnMerge"               $ withFocused (sendMessage . UnMerge))
    , ("M-C-/", addName "UnMergeAll"            $ withFocused (sendMessage . UnMergeAll))
    , ("M-C-.", addName "Switch focus next tab" $ onGroup W.focusUp')
    , ("M-C-,", addName "Switch focus prev tab" $ onGroup W.focusDown')
    ]

    {- | Scratchpads
    Toggle show/hide these programs. They run on a hidden workspace.
    When you toggle them to show, it brings them to current workspace.
    Toggle them to hide and it sends them back to hidden workspace (NSP).
    -}
    ^++^ subKeys "Scratchpads"
    [ ("M-` 1", addName "Toggle scratchpad terminal"   $ namedScratchpadAction myScratchPads "terminal")
    , ("M-` 2", addName "Toggle scratchpad mocp"       $ namedScratchpadAction myScratchPads "mocp")
    , ("M-` 3", addName "Toggle scratchpad calculator" $ namedScratchpadAction myScratchPads "calculator")
    ]

    -- Controls for mocp music player (SUPER-u followed by a key)
    ^++^ subKeys "Mocp music player"
    [ ("M-u p", addName "mocp play"                $ spawn "mocp --play")
    , ("M-u l", addName "mocp next"                $ spawn "mocp --next")
    , ("M-u h", addName "mocp prev"                $ spawn "mocp --previous")
    , ("M-u <Space>", addName "mocp toggle pause"  $ spawn "mocp --toggle-pause")
    ]

    -- Emacs (SUPER-e followed by a key)
    ^++^ subKeys "Code Editor"
    [ ("M-c c", addName "VS Code"                   $ spawn myEditor)
    , ("M-c e", addName "Emacsclient"               $ spawn myEmacs)
    , ("M-c a", addName "Emacsclient EMMS (music)"  $ spawn (myEmacs ++ "--eval '(emms)' --eval '(emms-play-directory-tree \"~/Music/\")'"))
    , ("M-c b", addName "Emacsclient Ibuffer"       $ spawn (myEmacs ++ "--eval '(ibuffer)'"))
    , ("M-c d", addName "Emacsclient Dired"         $ spawn (myEmacs ++ "--eval '(dired nil)'"))
    , ("M-c m", addName "Mousepad"                  $ spawn "mousepad")
    ]

    -- Multimedia Keys
    ^++^ subKeys "Multimedia keys"
    [ ("<XF86AudioMute>", addName "Toggle audio mute"   $ spawn "volumecontrol.sh -o m")
    , ("<XF86AudioLowerVolume>", addName "Lower volume" $ spawn "volumecontrol.sh -o d")
    , ("<XF86AudioRaiseVolume>", addName "Raise volume" $ spawn "volumecontrol.sh -o i")
    , ("<XF86MonBrightnessDown>", addName "Raise vol"   $ spawn "brightnesscontrol.sh d")
    , ("<XF86MonBrightnessUp>", addName "Raise vol"     $ spawn "brightnesscontrol.sh i")
    , ("<Print>", addName "Take screenshot"             $ spawn "flameshotgui")
    ]

    -- Workspace
    ^++^ subKeys "Workspace"
    [ ("M1-<Tab>", addName "Cycle with last WS" $ toggleWS) ]

    -- The following lines are needed for named scratchpads.
  where
    nonNSP          = WSIs (return (\ws -> W.tag ws /= "NSP"))
    nonEmptyNonNSP  = WSIs (return (\ws -> isJust (W.stack ws) && W.tag ws /= "NSP"))
```

# MAKE XMONAD AND POLYBAR TALK TO EACH OTHER

As i have explained before, we need to integrate xmonad to visualize the
current window title and workspaces in polybar. To make xmonad and
polybar talk we only need to add \[module/xmonad\] in our polybar config
and polybar ready to talk. Now, for xmonad to talk, we need to configure
it to send log events information via
[dbus](https://hackage.haskell.org/package/dbus) using XMonad's
DynamicLog with the help of xmonad-log. The [pretty printing
(PP)](https://hackage.haskell.org/package/xmonad-contrib-0.17.1/docs/XMonad-Hooks-DynamicLog.html#t:PP)
options, allows us to customize the formatting of status information.

``` haskell
bg1 = "#3c3836"
bg2 = "#504945"
red = "#fb4934"

myLogHook :: D.Client -> PP
myLogHook dbus = def
    { ppOutput = dbusOutput dbus
    , ppWsSep = ""
    , ppSep = " | "
    , ppLayout = wrap "%{A1:xdotool key super+Tab &:}" "%{A}"
    , ppTitle = shorten 50
    , ppExtras = [windowCount]
    , ppOrder = \(_:l:t:ex) -> [l]++ex++[t]
    }

-- Emit a DBus signal on log updates
dbusOutput :: D.Client -> String -> IO ()
dbusOutput dbus str = do
    let signal = (D.signal objectPath interfaceName memberName) {
        D.signalBody = [D.toVariant $ UTF8.decodeString str]
    }
    D.emit dbus signal
  where
    objectPath = D.objectPath_ "/org/xmonad/Log"
    interfaceName = D.interfaceName_ "org.xmonad.Log"
    memberName = D.memberName_ "Update"
```

# THE MAIN

This is the "main" of XMonad. This where everything in our configs comes
together and works.

``` haskell
main :: IO ()
main = do
    dbus <- D.connectSession
    -- Request access to the DBus name
    D.requestName dbus (D.busName_ "org.xmonad.Log")
        [D.nameAllowReplacement, D.nameReplaceExisting, D.nameDoNotQueue]
    xmonad
        $ addDescrKeys' ((mod4Mask, xK_F1), showKeybindings) myKeys
        $ docks . ewmh
        $ def
            { manageHook         = myManageHook <+> manageDocks
            , handleEventHook    = windowedFullscreenFixEventHook <> swallowEventHook (className =? "Alacritty"  <||> className =? "st-256color" <||> className =? "XTerm") (return True) <> trayerPaddingXmobarEventHook
            , modMask            = myModMask
            , terminal           = myTerminal
            , startupHook        = myStartupHook
            , layoutHook         = myLayoutHook
            , workspaces         = myWorkspaces
            , borderWidth        = myBorderWidth
            , normalBorderColor  = myNormColor
            , focusedBorderColor = myFocusColor
            , logHook            = dynamicLogWithPP (myLogHook dbus)
            }
```
