IMAGE := backendsystems/thesvg
VERSION := $(shell git describe --tags --abbrev=0)

.PHONY: build push release

build:
	docker build \
		-t $(IMAGE):$(VERSION) \
		-t $(IMAGE):latest \
		-f docker/Dockerfile .

push:
	docker push $(IMAGE):$(VERSION)
	docker push $(IMAGE):latest

release: build push
