#!/bin/bash
set -e

# Setup SSH signing key
ssh-add -L | head -1 > ~/.ssh/allowed_signers_key.pub

# Configure git for SSH signing
git config --global user.signingkey ~/.ssh/allowed_signers_key.pub

# Setup allowed signers file
echo "$(git config user.email) $(cat ~/.ssh/allowed_signers_key.pub)" > ~/.ssh/allowed_signers
git config --global gpg.ssh.allowedSignersFile ~/.ssh/allowed_signers
