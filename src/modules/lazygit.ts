import { PrimerPalette } from "palette";
import { blend } from "@lib/colors";

export default {
  name: "lazygit",
  ext: "yml",
  generate: (name: string, p: PrimerPalette): string => {
    const parse = (c: string): string => blend(p.canvas.default, c);

    return `# yaml-language-server: $schema=https://raw.githubusercontent.com/jesseduffield/lazygit/master/schema/config.json
# (${name}) Colors for Lazygit
gui:
  theme:
    activeBorderColor:
      - "${p.ansi.blueBright}"
      - bold
    inactiveBorderColor:
      - "${p.fg.muted}"
    searchingActiveBorderColor:
      - "${p.open.fg}"
      - bold
    optionsTextColor:
      - "${p.sponsors.muted}"
    selectedLineBgColor:
      - "${parse(p.codemirror.activelineBg)}"
      - bold
    selectedRangeBgColor:
      - reverse
    cherryPickedCommitBgColor:
      - "${parse(p.codemirror.activelineBg)}"
    cherryPickedCommitFgColor:
      - "${p.fg.onEmphasis}"
      - underline
    markedBaseCommitFgColor:
      - "${p.severe.fg}"
      - underline
    markedBaseCommitBgColor:
      - "${parse(p.codemirror.activelineBg)}"
    unstagedChangesColor:
      - "${p.done.fg}"
    defaultFgColor:
      - "${p.fg.default}"
`;
  },
}
