# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, packageManager, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.fastfetch
    pkgs.git
    pkgs.nodejs_22
    pkgs.bun
    pkgs.fastfetch
  ];
  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "Vue.volar"
      "formulahendry.auto-close-tag"
      "formulahendry.auto-rename-tag"
      "sysoev.language-stylus"
      "antfu.unocss"
      "antfu.iconify"
      "cipchk.cssrem"
      "wix.vscode-import-cost"
      "xabikos.JavaScriptSnippets"
      "miguelsolorio.fluent-icons"
      "castrogusttavo.symbols"
      "michelemelluso.gitignore"
      "yuyinws.nuxt-module-intellisense"
    ];
    # Enable previews
    previews = {
      enable = true;
      previews = {
        # web = {
        #   # Example: run "npm run dev" with PORT set to IDX's defined port for previews,
        #   # and show it in IDX's web preview panel
        #   command = ["npm" "run" "dev"];
        #   manager = "web";
        #   env = {
        #     # Environment variables to set for your server
        #     PORT = "$PORT";
        #   };
        # };
      };
    };
    # Workspace lifecycle hooks
    workspace = {
      onCreate = {
        npm-install = "bun install";
        # default.openFiles = [ ".idx/dev.nix" "README.md" ];
      };
      onStart = {
        dev = "bun dev";
      };
    };
  };
}
