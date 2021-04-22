(this.webpackJsonpjamming=this.webpackJsonpjamming||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,s,c=a(0),i=a(1),r=a.n(i),o=a(8),l=a.n(o),h=(a(15),a(9)),u=a(3),d=a(4),p=a(2),m=a(6),j=a(5),b=(a(16),a(17),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).search=n.search.bind(Object(p.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"search",value:function(e){this.props.onSearch(e)}},{key:"handleTermChange",value:function(e){this.search(e.target.value)}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"SearchBar",children:Object(c.jsxs)("div",{className:"input-container",children:[Object(c.jsx)("input",{onChange:this.handleTermChange,placeholder:"Enter a Song, Album, or Artist"}),Object(c.jsx)("button",{className:"SearchButton",children:"Search"})]})})}}]),a}(r.a.Component)),v=(a(18),a(19),a(20),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).addTrack=n.addTrack.bind(Object(p.a)(n)),n.removeTrack=n.removeTrack.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"renderAction",value:function(){return this.props.isRemoval?Object(c.jsx)("button",{onClick:this.removeTrack,className:"Track-action",children:"-"}):Object(c.jsx)("button",{onClick:this.addTrack,className:"Track-action",children:"+"})}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"Track",children:[Object(c.jsxs)("div",{className:"Track-information",children:[Object(c.jsx)("h3",{children:this.props.track.name}),Object(c.jsxs)("p",{children:[this.props.track.artist," ",this.props.track.album]})]}),this.renderAction()]})}}]),a}(r.a.Component)),f=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"TrackList",children:this.props.tracks?this.props.tracks.map((function(t){return Object(c.jsx)(v,{track:t,onRemove:e.props.onRemove,onAdd:e.props.onAdd,isRemoval:e.props.isRemoval},t.id)})):null})}}]),a}(r.a.Component),k=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"SearchResults",children:[Object(c.jsx)("h2",{children:"Results"}),Object(c.jsx)(f,{onAdd:this.props.onAdd,isRemoval:!1,tracks:this.props.searchResults})]})}}]),a}(r.a.Component),y=(a(21),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleNameChange=n.handleNameChange.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"Playlist",children:[Object(c.jsx)("input",{onChange:this.handleNameChange,placeholder:"Enter Playlist Name..."}),Object(c.jsx)(f,{onRemove:this.props.onRemove,isRemoval:!0,tracks:this.props.playlistTracks}),Object(c.jsx)("button",{onClick:this.props.onSave,className:"Playlist-save",children:"SAVE TO SPOTIFY"})]})}}]),a}(r.a.Component)),O="https://accounts.spotify.com/authorize?client_id=".concat("2c7042b2742b481d9426d28900b9990a","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("https://tonyadi.github.io/apps/jamming-app.html"),T={getAccessToken:function(){if(n)return n;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t)return n=e[1],s=t[1],window.setTimeout((function(){return n=""}),1e3*s),window.history.pushState("Access Token",null,"/"),n;window.location=O},savePlaylist:function(e,t){if(e&&t){var a={Authorization:"Bearer ".concat(n)},s="",c="";fetch("https://api.spotify.com/v1/me",{headers:a}).then((function(e){return e.json()})).then((function(e){return c=e.id})).then((function(){var n="https://api.spotify.com/v1/users/".concat(c,"/playlists");fetch(n,{method:"POST",headers:a,body:JSON.stringify({name:e})}).then((function(e){return e.json()})).then((function(e){return s=e.id})).then((function(){var e="https://api.spotify.com/v1/users/".concat(c,"/playlists/").concat(s,"/tracks");fetch(e,{method:"POST",headers:a,body:JSON.stringify({uris:t})})})).catch((function(e){console.log(e)}))}))}},search:function(e){return n=T.getAccessToken(),fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).then((function(e){return e.tracks?e.tracks.items.map((function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}})):[]})).catch((function(e){console.log(e)}))}},N=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={searchResults:[],playlistName:"",playlistTracks:[]},n.addTrack=n.addTrack.bind(Object(p.a)(n)),n.removeTrack=n.removeTrack.bind(Object(p.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(p.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(p.a)(n)),n.search=n.search.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"addTrack",value:function(e){this.state.playlistTracks.find((function(t){return t.id===e.id}))||this.setState({playlistTracks:[].concat(Object(h.a)(this.state.playlistTracks),[e])})}},{key:"removeTrack",value:function(e){this.setState({playlistTracks:this.state.playlistTracks.filter((function(t){return t.id!==e.id}))})}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"savePlaylist",value:function(){var e=this.state.playlistTracks.map((function(e){return e.uri}));T.savePlaylist(this.state.playlistName,e),this.setState({playlistName:"New Playlist",playlistTracks:[]}),alert("Playlist Saved")}},{key:"search",value:function(e){var t=this;T.search(e).then((function(e){t.setState({searchResults:e})}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"top-header",children:Object(c.jsxs)("h1",{className:"zero-margin",children:["Ja",Object(c.jsx)("span",{className:"highlight",children:"mmm"}),"ing"]})}),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("h1",{className:"greeting",children:["Create your own ",Object(c.jsx)("span",{id:"text-background",children:"personalized"})," Spotify playlist"]}),Object(c.jsx)(b,{onSearch:this.search}),Object(c.jsxs)("div",{className:"App-playlist",children:[Object(c.jsx)(k,{onAdd:this.addTrack,searchResults:this.state.searchResults}),Object(c.jsx)(y,{onSave:this.savePlaylist,onNameChange:this.updatePlaylistName,onRemove:this.removeTrack,playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks})]})]})]})}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("jamming-app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.a571eeef.chunk.js.map