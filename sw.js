'use strict';
const VERSION='not-me-20261016-1';
const PREFIX='not-me:'+new URL(self.registration.scope).pathname+':';
const CACHE=PREFIX+VERSION;
const BASE=self.registration.scope;
const SHELL=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL.map(path=>new URL(path,BASE).href))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);if(request.method!=='GET'||url.origin!==new URL(BASE).origin||!url.href.startsWith(BASE))return;
 if(request.mode==='navigate'){
  event.respondWith(fetch(request).then(async response=>{if(response.ok){try{const cache=await caches.open(CACHE);await cache.put(new URL('./index.html',BASE).href,response.clone())}catch{}}return response}).catch(()=>caches.open(CACHE).then(async cache=>(await cache.match(new URL('./index.html',BASE).href))||(await cache.match(BASE))||Response.error())));return;
 }
 event.respondWith(caches.open(CACHE).then(async cache=>{const cached=await cache.match(request,{ignoreSearch:true});if(cached)return cached;return fetch(request)}));
});
