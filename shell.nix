let
  pkgs = import(fetchTarball "channel:nixpkgs-unstable"){};
in pkgs.mkShell {
  buildInputs = [ 
      pkgs.nodejs
    ];
    shellHook = ''
      echo "Node $(node --version)"
      echo "npm  $(npm --version)"
    '';
}
