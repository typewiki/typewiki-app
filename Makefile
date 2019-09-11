PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash

build:
	cross-env PUBLIC_URL=./ rescripts build

cm:
	git add .
	git cz

eject:
	rescripts eject

extract-langs:
	i18next-scanner --config ./.i18next-scanner.js

lint:
	eslint --ext .ts,.tsx --ignore-path .gitignore . ${ARGS}

lint-all:
	@make tsc
	@make lint
	@make lint-styles

lint-fix:
	@make ARGS="--fix" lint

lint-styles:
	stylelint **/*.*scss

lint-styles-fix:
	stylelint **/*.*scss --fix

package:
	@make build
	@make package-electron

package-ci:
	@make postinstall
	@make build
	@make ARGS="--publish onTagOrDraft" package-electron

package-electron:
	electron-builder build -c.extraMetadata.main=build/main.js --config .electronbuildrc ${ARGS}

postinstall:
	electron-builder install-app-deps

prestart:
	tsc -p electron/tsconfig.json

prebuild:
	tsc -p electron/tsconfig.json

release:
	standard-version --no-verify

start:
	rescripts start

test:
	${ENVS} rescripts test --coverage

test-all:
	@make ENVS="cross-env CI=true" test
	@make test-e2e

test-e2e:
	@make build
	@make test-cafe ${ARGS}

test-e2e-live:
	@make ARGS="-L" test-e2e

test-cafe:
	cross-env NODE_ENV=production testcafe electron:./ ./e2e/**/*.e2e.ts

tsc:
	tsc --noEmit
