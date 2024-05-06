package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/gorilla/mux"
)

/*
//go:embed web-example/dist
var app embed.FS*/
/**
func main() {
	dist, err := fs.Sub(app, "web-example/dist")
	if err != nil {
		log.Fatal("error")
		return
	}
	http.Handle("/", http.FileServer(http.FS(dist)))
	log.Fatal(http.ListenAndServe(":8001", nil))
}**/

type spaHandler struct {
	staticPath string
	indexPath  string
}

func (h spaHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {

	path := filepath.Join(h.staticPath, r.URL.Path)

	fi, err := os.Stat(path)

	if os.IsNotExist(err) || fi.IsDir() {
		http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	}

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)

		return
	}

	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(map[string]bool{"ok": true})
	})

	spa := spaHandler{staticPath: "web-example/dist", indexPath: "index.html"}
	router.PathPrefix("/").Handler(spa)

	srv := &http.Server{
		Handler:      router,
		Addr:         "127.0.0.1:8001",
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	log.Fatal(srv.ListenAndServe())
}
