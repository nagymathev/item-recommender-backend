FROM node:20-alpine as builder

WORKDIR /app
COPY . .

RUN npm install

# will put output into folder ./out
RUN npx tsc

FROM node:20-alpine as runtime

WORKDIR /app
# Get package.json files to dependencies
COPY package.json .
COPY package-lock.json .

# Copy built javascript
COPY --from=builder /app/out ./out

# Install only runtime dependencies
RUN npm install --omit=dev

ENTRYPOINT [ "npm", "run", "serve"]