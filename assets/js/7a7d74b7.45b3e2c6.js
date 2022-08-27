"use strict";(self.webpackChunkdevlog=self.webpackChunkdevlog||[]).push([[310],{6426:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"Upstream, DownStream","metadata":{"permalink":"/devlog/blog/Upstream, DownStream","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-08-27-first-blog-post.md","source":"@site/blog/2022-08-27-first-blog-post.md","title":"Upstream, DownStream","description":"\uacfc\uac70\uc758 \uc18c\uc2a4\uad00\ub9ac\ub97c \ud558\uba74\uc11c, window OS\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud558\ub358 TortoiseGit\ub97c \uc0ac\uc6a9 \ud558\ub2e4.","date":"2022-08-27T00:00:00.000Z","formattedDate":"2022\ub144 8\uc6d4 27\uc77c","tags":[{"label":"github","permalink":"/devlog/blog/tags/github"},{"label":"git","permalink":"/devlog/blog/tags/git"}],"readingTime":4.27,"hasTruncateMarker":false,"authors":[{"name":"Sejune Oh","title":"Front End Engineer","url":"https://github.com/SejuneOh","imageURL":"https://avatars.githubusercontent.com/u/103201530?s=400&u=69cedf54cc5c427c96728a55d00e995b4dc9b145&v=4","key":"june"}],"frontMatter":{"slug":"Upstream, DownStream","title":"Upstream, DownStream","authors":"june","tags":["github","git"]}},"content":"\uacfc\uac70\uc758 \uc18c\uc2a4\uad00\ub9ac\ub97c \ud558\uba74\uc11c, window OS\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud558\ub358 TortoiseGit\ub97c \uc0ac\uc6a9 \ud558\ub2e4.  \\n\uc6f9\uc758 FrontEnd\ub97c \uacf5\ubd80\ud558\uba74\uc11c \ub2e4\uc2dc Git\uacfc Github\ub97c \uc0ac\uc6a9\ud574\uc11c \ud504\ub85c\uc81d\ud2b8 \uc18c\uc2a4\uad00\ub9ac\ub97c \ud558\ub824\uace0\ud588\ub294\ub370.\\n*upStream, DownStream*\uc758 \uac1c\ub150\uc774 \uc548\uc7a1\ud600 \ucc3e\uc544\ubcf4\uace0 \uc774\ud574\ud55c \ub0b4\uc6a9\uc744 \uacf5\uc720\ud558\ub824\uace0 \ud569\ub2c8\ub2e4.\\n\\n---\\n\x3c!--more--\x3e\\n\\n## Git vs Github?\\n\\n\ub9e8\ucc98\uc74c git\uc744 \uc54c\uc558\uc744 \ub54c\ub294 git\uacfc github\ub294 \uac19\uc740 \ub0b4\uc6a9\uc744 \ub9d0\ud558\ub294 \uc904 \uc54c\uc558\uc5b4\uc694.  \\n\uc81c\ub300\ub85c \uacf5\ubd80\ub97c \uc548\ud55c \uac83\uc774\uc9c0\uc694... git\uc740 VCS(Version Control System), SCM(Source Control Managment)\ub77c\uace0 \ub9d0\ud558\ub294 \ud615\uc0c1\uad00\ub9ac \uc2dc\uc2a4\ud15c, \uc989 \uc18c\uc2a4\uc758 \ubc84\uc804 \ubc0f \uae30\ub85d \uad00\ub9ac\ub97c \ub3c4\uc640\uc8fc\ub294 \ud504\ub85c\uadf8\ub7a8\uc774\uace0, Github\ub294 \uadf8 \ubc84\uc804\uad00\ub9ac \uc2dc\uc2a4\ud15c\uc740 \uc6d0\uaca9\uc73c\ub85c \uc9c0\uc6d0\ud574\uc8fc\uace0 \uad00\ub9ac\ub97c \ub3c4\uc640\uc8fc\ub294 \uc11c\ube44\uc2a4 \uc2dc\uc2a4\ud15c\uc744 \ub9d0\ud569\ub2c8\ub2e4.\\n\\n\uc77c\ub2e8 \uac1c\ub150\uc740 \uc54c\uace0 \uc811\uadfc\ud558\ub2c8\uae50 \uc774\ud574\uac00 \uc465\uc465 \ub418\ub354\ub77c\uad6c\uc694 \uc790 \uc774\uc81c \uba54\uc778 \uc8fc\uc81c upstream, down\uc2a4\ud2b8\ub9bc\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubd10\uc694.\\n\\n## UpStream, DownStream\\n\\n\uc774 \ub458\uc758 \ub2e8\uc5b4\ub97c \ub4e4\uc5b4\ubcf4\uc168\uc744 \uac83 \uc785\ub2c8\ub2e4. \uc5b8\uc81c?\\n\\n- \ud300\uc7a5\ub2d8\uc774 \uad00\ub9ac\ud558\ub294 \uc18c\uc2a4\ub97c Fork\ub85c \uac00\uc838\uc654\ub294\ub370. \ud300\uc7a5\ub2d8\uc774 upstream\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8 \ud574\ub77c\\n- \ud300 \ud504\ub85c\uc81d\ud2b8\ub97c \ud558\ub294\ub370, \ud300\uc7a5\uc774 downstream\uc5d0\uc11c \uc791\uc5c5\ud55c\uac70 PR\ud574\uc8fc\uc138\uc694..\\n\\n\uc774\uac8c \ubb34\uc2a8 \ub9d0\uc774\uc9c0 \ud588\uc744 \uc218\ub3c4 \uc788\uc744 \uac83 \uac19\uc544\uc694, \uc77c\ub2e8 \uc774 \ub458\uc740 \uc0c1\ub300\uc801\uc778 \uac1c\ub150\uc785\ub2c8\ub2e4.  \\nupStream\uc740 \uba54\uc778\uc73c\ub85c \uad00\ub9ac\ub418\uace0 \uc788\ub294 \uc6d0\uaca9 \uc800\uc7a5\uc18c\ub97c \uac00\ub974\ud0b5\ub2c8\ub2e4.  \\ndownStream\uc740 \ud558\uc704\uc5d0\uc11c \uac1c\ubc1c\ud558\uace0, \uc5c5\ub370\uc774\ud2b8\ud558\uace0, \uc218\uc815\ud558\ub294 \ud658\uacbd\uc744 \uac00\ub974\ud0a4\ub294 \uac83\uc774\uad6c\uc694\\n\\n\uc774\ud574\ud558\uae30 \uc27d\uac8c \ub2e4\uc74c \ub450 \uc0c1\ud669\uc744 \ubcf4\uace0 \ube44\uad50\ud574\ubcf4\uace0 \ucc28\uc774\ub97c \ubcfc\uae4c\uc694 ?\\n\\n1. _\ub0b4\uac00 \ud63c\uc790 \uc2a4\uc2a4\ub85c \ud504\ub85c\uc81d\ud2b8\ub97c github\ub85c \uad00\ub9ac\ud588\uc744 \ub54c_  \\n   \uc5ec\uae30\uc11c upStream\uc740 \uc81c\uac00 \ub9cc\ub4e0 github\uc758 remote(repo)\ub97c \ub9d0\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 down \uc2a4\ud2b8\ub9bc\uc740 \uc81c\uac00 \uc791\uc5c5\ud558\ub294 local\ud658\uacbd\uc774 \ub429\ub2c8\ub2e4.\\n\\n1. _\ud611\uc5c5\uc5d0\uc11c \ub2e4\ub978 \uc0ac\ub78c\uc758 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c Fork(\uc0c1\ub300\ubc29\uc758 \uc18c\uc2a4\ub97c \uc790\uc2e0\uc758 repo\ub85c)\uc5d0\uc11c \uc791\uc5c5\ud560\ub54c_.  \\n   \uc5ec\uae30\uc11c\ub294 upStream\uc740 \uc18c\uc2a4\ub97c Fork\ud574\uc11c \uac00\uc838\uc628 \uc0c1\ub300\ubc29\uc758 \uc6d0\uaca9 repo\ub97c \ub9d0\ud558\uace0, \uc790\uc2e0\uc758 \uad00\ub9ac\ud558\uace0 \uc2e4\ud589\ud558\ub294 repo\ubc0f \ud658\uacbd\uc744 downStream\uc744 \ub9d0\ud569\ub2c8\ub2e4.\\n\\n\ub450 \uac00\uc9c0\uc758 \ucc28\uc774\uc810\uc774 \ub290\uaef4\uc9c0\uc2dc\ub098\uc694?  \\n\uc804\uc790\ub294 \ud558\ub098\ub85c \uc18c\uc2a4\ub97c \uad00\ub9ac\ud558\uace0, \ud6c4\uc790\ub294 \ub2e4\ub978 \uc0ac\ub78c\uc758 \uc18c\uc2a4\ub97c \uac00\uc838\uc640 \ud611\uc5c5\uc744 \ud560 \ub54c, \uc18c\uc2a4\ub97c \uac1c\ubc1c\ud558\ub294 \ud658\uacbd\uc774 \ucc28\uc774\uac00 \uc788\uc5c8\uc8e0 upStream, downStream\uc740 \uc0c1\ub300\uc801\uc73c\ub85c \uc18c\uc2a4\uac00 \uad00\ub9ac \ub418\uace0\uc788\ub294 Main \ud658\uacbd\uc744 upstream\uc744 \ub9d0\ud558\uace0, \uadf8 \uc678 \uc18c\uc2a4\uac00 \uac1c\ubc1c\ub418\uace0 \ud558\uc704\uc5d0\uc11c \uac1c\ubc1c\ub418\ub294 \ud658\uacbd\uc744 \ub9d0\ud569\ub2c8\ub2e4.\\n\\n\uc774\ud574\uac00 \ub418\uc168\uc744\uae4c\uc694? \uc5c5\ub85c\ub4dc, \ub2e4\uc6b4\ub85c\ub4dc\uc758 \uac1c\ub150 \ubcf4\ub2e4\ub294 \uad00\ub9ac\uac00 \ub418\uace0\uc788\ub294 \ud658\uacbd\uc758 \uc0c1\ub300\uc801\uc778 \uae30\uc900\uc73c\ub85c \ub098\ub204\uc5b4 \ud45c\ud604\ud569\ub2c8\ub2e4. \uadf8\ub798\uc11c \ud611\uc5c5\uc2dc\uc5d0\ub294 \ud558\uc704 downStream\uc5d0\uc11c main\uc73c\ub85c \uc18c\uc2a4\ub97c \uad00\ub9ac\ud558\ub294 upStream \uacc4\uc815 \ube0c\ub79c\uce58\ub97c \ub098\ub204\uc5b4 \uc18c\uc2a4\ub97c \uc5c5\ub85c\ub4dc\ud558\ub294 \uac1c\ub150\uc758 branch\uc640 \uac1c\ubc1c \ubc0f \uc218\uc815\ud558\ub294 branch\ub97c \ub098\ub204\uc5b4 \uc5ed\ud560\uc744 \uc815\ud574\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\\n\\n\uc870\uae08\uc740 \ud5f7\uac08\ub9ac\ub294 \uac1c\ub150\uc774\ub77c \uacf5\uc720\ud558\uace0 \uc2f6\uc5b4 \uc774\ub807\uac8c \uc791\uc131\ud574\uc11c \ud3ec\uc2a4\ud2b8\uc5d0 \uc62c\ub9ac\ub294\ub370 \ub9ce\uc740 \ub3c4\uc6c0\uc774 \ub418\uc5c8\uc73c\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4."}]}')}}]);