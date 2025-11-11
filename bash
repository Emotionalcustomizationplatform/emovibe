# clear old
rm -rf node_modules package-lock.json

# install
npm ci

# dev
npm run dev
# or build + start to emulate production
npm run build
npm run start