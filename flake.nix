{
  description = "node devshell (with rust)";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { nixpkgs, ... }: {
    devShells = builtins.mapAttrs (system: pkgs: {
      default = pkgs.mkShell {
        packages = with pkgs; [
          # replace by the packages you need
          nodejs
          cargo
          rustc
        ];
        
        #uncomment this and fill with your shell hook
        shellHook = ''
          exec zsh
        '';
      };
    }) nixpkgs.legacyPackages;
  };
}
