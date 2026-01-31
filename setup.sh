# !/bin/bash
NEEDLE_GREEN='\033[0;32m'
NEEDLE_NC='\033[0m' # No Color

# Install Ruby Gems to ~/gems
export GEM_HOME="$HOME/gems"
export PATH="$HOME/gems/bin:$PATH"

echo -e "${NEEDLE_GREEN}Setup successful${NEEDLE_NC}"