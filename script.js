/* ---------- Icons (one consistent outline set) ---------- */
const I={home:'<path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',explore:'<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',logs:'<path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12z"/>',prep:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M9 8h6"/>',plan:'<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M8 12l3 3 5-6"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',bm:'<path d="M6 3h12v18l-6-4-6 4z"/>',back:'<path d="M15 5l-7 7 7 7"/>',shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',warn:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',bell:'<path d="M18 16V11a6 6 0 0 0-12 0v5l-2 2h16zM10 21h4"/>'};
const ic=n=>`<svg viewBox="0 0 24 24">${I[n]}</svg>`;
const e=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- Illustrative SAMPLE data (fictional companies, not real information) ---------- */
const C=[
{n:'Nimbus Tech',role:'Software Engineer',type:'Product',cgpa:7.5,sk:['DSA','OOP','DBMS'],rounds:['Online coding test','Technical interview 1','Technical interview 2','HR round'],ov:'Cloud software company that builds developer tools.',el:'Min CGPA 7.5, no active backlogs',prep:['DSA','Technical'],s:'V',src:'Placement cell notice',d:'12 Nov 2026'},
{n:'Orbit Systems',role:'Associate Engineer',type:'Service',cgpa:6.5,sk:['Java','SQL','Aptitude'],rounds:['Aptitude test','Technical interview','HR round'],ov:'IT services company with large campus batches.',el:'Min CGPA 6.5 (reported by students)',prep:['Aptitude','Programming'],s:'P',src:'Student group chat',d:'09 Nov 2026'},
{n:'Kavach Analytics',role:'Data Analyst',type:'Product',cgpa:7,sk:['SQL','Python','Statistics'],rounds:['Case study','Technical interview','HR round'],ov:'Analytics startup hiring for data roles.',el:'Min CGPA 7.0 (from last year)',prep:['Technical','Communication'],s:'O',src:'Last year notice',d:'03 Feb 2026'},
{n:'Zenith Core Works',role:'Graduate Engineer',type:'Core',cgpa:7.5,sk:['Embedded C','Electronics'],rounds:['Written test','Technical panel','HR round'],ov:'Core engineering company for embedded roles.',el:'Min CGPA 7.5, relevant branches only',prep:['Technical','HR'],s:'P',src:'Senior verbal report',d:'01 Nov 2026'},
{n:'Lumen Software',role:'Software Developer',type:'Product',cgpa:6,sk:['C++','Problem solving'],rounds:['Coding round 1','Coding round 2','HR round'],ov:'Product company known for multi-round coding tests.',el:'Min CGPA 6.0, no active backlogs',prep:['DSA','Programming'],s:'V',src:'Company careers notice',d:'10 Nov 2026'}];
const U=[{t:'Nimbus Tech: applications open',s:'V',src:'Placement cell notice',d:'12 Nov 2026'},{t:'Orbit Systems: drive date rumoured',s:'P',src:'Student group chat',d:'09 Nov 2026'},{t:'Kavach Analytics: old eligibility post',s:'O',src:'Last year notice',d:'03 Feb 2026'}];
const L=[
{c:'Nimbus Tech',r:'Technical',q:['Design a rate limiter','Explain database indexing'],tip:'Dry-run your code aloud before submitting.',by:'Senior, Batch 25',s:'V',src:'Checked against placement cell records',d:'15 Nov 2026'},
{c:'Orbit Systems',r:'Aptitude',q:['Time and work problems','Series completion'],tip:'Practise timed quant sets.',by:'Senior, Batch 25',s:'P',src:'Single senior report',d:'08 Nov 2026'},
{c:'Lumen Software',r:'HR',q:['Why this company?','Describe a project you led'],tip:'Know every line of your resume.',by:'Senior, Batch 24',s:'O',src:'Senior report from an older drive',d:'20 Mar 2026'},
{c:'Kavach Analytics',r:'Technical',q:['Write a SQL query using joins','Explain p-value simply'],tip:'Revise joins with small tables.',by:'Senior, Batch 25',s:'P',src:'Single senior report',d:'05 Nov 2026'}];
const R=[
{n:'Quant Shortcuts',c:'Aptitude',lv:'Beginner',d:'Percentages, ratios and time-work tricks.',u:'Nov 2026'},
{n:'Top 50 DSA Patterns',c:'DSA',lv:'Intermediate',d:'Sliding window, two pointers, DP.',u:'Oct 2026'},
{n:'Java and C++ Basics',c:'Programming',lv:'Beginner',d:'OOP concepts asked in campus rounds.',u:'Sep 2026'},
{n:'SQL Interview Guide',c:'Technical',lv:'Intermediate',d:'Joins, grouping and subqueries.',u:'Oct 2026'},
{n:'OS and DBMS Revision',c:'Technical',lv:'Advanced',d:'Scheduling, deadlocks, normalisation.',u:'Aug 2026'},
{n:'Group Discussion Tips',c:'Communication',lv:'Beginner',d:'Structure points and speak clearly.',u:'Oct 2026'},
{n:'Common HR Questions',c:'HR',lv:'Beginner',d:'Answers framed with real examples.',u:'Nov 2026'},
{n:'Resume Checklist',c:'HR',lv:'Beginner',d:'One-page resume review list.',u:'Nov 2026'}];

/* ---------- App state ---------- */
const HS={'Nimbus Tech':'Hiring open','Orbit Systems':'Drive date not announced','Kavach Analytics':'No hiring info yet','Zenith Core Works':'No hiring info yet','Lumen Software':'Hiring open'}; // sample hiring status
const S={scr:'splash',cid:0,dk:true,name:'Shanaya',authTab:'Login',hq:'',eq:'',et:'All',ec:'Any',er:'All',sv:false,pl:'All levels',pt:'Daily',goal:'Clear aptitude rounds by December',rl:['Nimbus Tech'],lq:'',lr:'All',ls:'All',pq:'',pc:'All',
bm:{c:new Set(['Nimbus Tech']),l:new Set(),r:new Set()},done:new Set(),recent:['Nimbus Tech','Orbit Systems'],nt:true,ow:true,
goals:[{t:'Finish 2 aptitude sets',x:0},{t:'Solve 15 array problems',x:0},{t:'Update resume',x:1}],
tasks:[{t:'20 Quant MCQs',due:'20 Nov',day:'Wed',x:1},{t:'Revise SQL joins',due:'22 Nov',day:'Thu',x:0},{t:'Mock HR interview',due:'25 Nov',day:'Sat',x:0}]};
const $=s=>document.querySelector(s),DAYS=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],TD='Wed'; // TD = today in the demo
const NAV=[['home','Home'],['explore','Firms'],['logs','Logs'],['prep','Prep Kit'],['plan','My Plan']];
const SCR=[['splash','Splash'],['auth','Login'],['home','Home'],['explore','Firms'],['detail','Details'],['logs','Logs'],['prep','Prep Kit'],['plan','My Plan'],['profile','Profile']];

/* ---------- Information-trust components ---------- */
const T={V:['Verified','ok','shield'],P:['Pending verification','pe','clock'],O:['Outdated','od','warn']};
const badge=s=>`<span class="b ${T[s][1]}">${ic(T[s][2])}${T[s][0]}</span>`;
// Trust block: status, source, last updated, warning and report option
const trust=(o,what)=>`<div class="tr">${badge(o.s)}<div class="sub">Source: ${e(o.src)}<br>Last updated: ${o.d}</div>${o.s=='O'&&S.ow?'<div class="wn">This may be out of date. Confirm with the placement cell.</div>':''}${o.s=='P'?'<div class="wn pw">Not yet confirmed. Treat as unverified.</div>':''}<button class="lk" data-a="rep" data-k="${e(what)}">Report incorrect information</button></div>`;
const demo='<div class="demo">Illustrative sample data. Companies are fictional and status labels only demonstrate the trust system. Nothing here is real verification.</div>';
const sb=()=>'<div class="sb"><span>9:41</span><span class="si"><svg viewBox="0 0 24 24"><rect x="2" y="15" width="3.5" height="6" rx="1"/><rect x="8" y="11" width="3.5" height="10" rx="1"/><rect x="14" y="7" width="3.5" height="14" rx="1"/><rect x="20" y="3" width="3" height="18" rx="1"/></svg><span class="bat">78</span></span></div>';
const hdr=t=>`<div class="top"><h1>${t}</h1><div class="av" data-a="go" data-k="profile">${e(S.name[0])}</div></div>`;
const sr=(id,v,ph)=>`<div class="sr">${ic('search')}<input id="${id}" value="${e(v)}" placeholder="${ph}"></div>`;
const chips=(k,a)=>`<div class="chips">${a.map(v=>`<button class="ch ${S[k]==v?'on':''}" data-a="set" data-k="${k}" data-v="${v}">${v}</button>`).join('')}</div>`;
const bmb=(t,k)=>`<button class="bm ${S.bm[t].has(k)?'on':''}" data-a="bm" data-t="${t}" data-k="${e(k)}" aria-label="Bookmark">${ic('bm')}</button>`;
const pct=()=>S.tasks.length?Math.round(S.tasks.filter(t=>t.x).length/S.tasks.length*100):0;
const find=q=>C.map((c,i)=>[c,i]).filter(([c])=>(c.n+c.role+c.sk.join(' ')).toLowerCase().includes(q.toLowerCase()));

/* ---------- List builders (re-run when searching) ---------- */
const cCard=([c,i])=>`<div class="card"><div class="row"><div style="display:flex;gap:12px;align-items:center"><div class="ls">${c.n[0]}</div><div><h3>${c.n}</h3><div class="sub">${c.role} · ${c.type}</div></div></div>${bmb('c',c.n)}</div><div class="p"><b>Eligibility:</b> CGPA ${c.cgpa}+<br><b>Hiring status:</b> ${HS[c.n]}</div><div>${c.sk.map(s=>`<span class="tag">${s}</span>`).join('')}</div><div class="row" style="margin-top:12px">${badge(c.s)}<button class="btn" data-a="open" data-k="${i}">Details</button></div></div>`;
const lCard=(l,i)=>`<div class="card"><div class="row"><h3>${e(l.c)} · ${l.r}</h3>${bmb('l',l.c+i)}</div><div class="p"><b>Questions asked</b><br>${l.q.map(q=>'• '+e(q)).join('<br>')}</div><div class="p"><b>Tip:</b> ${e(l.tip)}</div><div class="sub" style="margin-top:6px">Shared by ${e(l.by)}</div>${trust(l,l.c+' experience')}</div>`;
const rCard=r=>`<div class="card"><div class="row"><h3>${r.n}</h3>${bmb('r',r.n)}</div><div class="p">${r.d}</div><div class="row" style="margin-top:10px"><div><span class="tag">${r.c}</span><span class="tag">${r.lv}</span></div><button class="btn ${S.done.has(r.n)?'':'l'}" data-a="done" data-k="${r.n}">${S.done.has(r.n)?'Done ✓':'Mark done'}</button></div><div class="sub" style="margin-top:8px">Last updated: ${r.u}</div></div>`;
const task=(t,i,k)=>`<div class="tk ${t.x?'d':''}"><div class="cb" data-a="tg" data-t="${k}" data-k="${i}">${t.x?'✓':''}</div><span class="tx">${e(t.t)}</span>${t.due?`<span class="sub">${e(t.due)}</span>`:''}${k=='tasks'?`<button class="x" data-a="del" data-k="${i}">×</button>`:''}</div>`;
const LST={
home(){const q=S.hq.trim();if(!q)return '';const f=find(q),l=L.filter(x=>(x.c+x.q.join(' ')).toLowerCase().includes(q.toLowerCase()));return `<div class="card"><h3>Results</h3>${f.map(([c,i])=>`<div class="tk"><span class="tx">${c.n} · ${c.role}</span><button class="btn l" data-a="open" data-k="${i}">Open</button></div>`).join('')}${l.map(x=>`<div class="tk"><span class="tx">${e(x.c)} · ${x.r} experience</span><button class="btn l" data-a="gologs" data-k="${e(x.c)}">Read</button></div>`).join('')}${f.length+l.length?'':'<div class="emp">No results for “'+e(q)+'”.</div>'}</div>`},
explore(){const a=find(S.eq).filter(([c])=>(S.et=='All'||c.type==S.et)&&(S.er=='All'||c.role.includes(S.er))&&(S.ec=='Any'||c.cgpa<=parseFloat(S.ec)));return a.map(cCard).join('')||'<div class="emp">No companies match.<br>Try clearing a filter.</div>'},
logs(){const a=L.map((l,i)=>[l,i]).filter(([l])=>(S.lr=='All'||l.r==S.lr)&&(S.ls=='All'||T[l.s][0].startsWith(S.ls))&&(l.c+l.q.join(' ')).toLowerCase().includes(S.lq.toLowerCase()));return a.map(([l,i])=>lCard(l,i)).join('')||'<div class="emp">No experiences found.<br>Be the first to share one.</div>'},
prep(){const a=R.filter(r=>(S.pc=='All'||r.c==S.pc)&&(S.pl=='All levels'||r.lv==S.pl)&&(!S.sv||S.bm.r.has(r.n))&&(r.n+r.d).toLowerCase().includes(S.pq.toLowerCase()));return a.map(rCard).join('')||'<div class="emp">No resources found.</div>'}};

/* ---------- Screens ---------- */
const V={
splash:()=>`<div class="cen"><div class="logo">${ic('shield')}</div><h1>PlacePrep</h1><p class="p" style="max-width:250px">Beyond the Rumour Mill. Placement information you can trust, with sources you can see.</p><div style="height:20px"></div><button class="btn" data-a="go" data-k="auth">Get started</button></div>`,
auth:()=>`${sb()}<div style="text-align:center;margin:26px 0 20px"><div class="logo" style="width:68px;height:68px;border-radius:22px;margin:0 auto 12px">${ic('shield')}</div><h1>${S.authTab=='Login'?'Welcome back':'Create account'}</h1><p class="p">PlacePrep · Beyond the Rumour Mill</p></div>${chips('authTab',['Login','Sign Up'])}
${S.authTab=='Sign Up'?'<input class="f" id="an" placeholder="Full name"><input class="f" id="ap" placeholder="Programme and year (e.g. B.Tech CSE, 4th year)">':''}<input class="f" id="ae" type="email" placeholder="College email"><input class="f" id="aw" type="password" placeholder="Password"><div style="height:6px"></div><button class="btn w" data-a="login">${S.authTab=='Login'?'Log in':'Create student account'}</button><button class="btn l w" style="margin-top:10px" data-a="login">Continue as guest student</button><p class="sub" style="text-align:center;margin-top:14px">Prototype only. No account data is stored or sent.</p>`,
home:()=>`${sb()}<div class="top"><div class="lg">${ic('shield')}</div><div style="flex:1"></div><div class="ib" data-a="fs">${ic('search')}</div><div class="ib">${ic('bell')}<span class="dot">2</span></div><div class="av" data-a="go" data-k="profile">${e(S.name[0])}</div></div><div class="sub" style="margin:0 4px">Good evening</div><h1 style="margin:0 0 12px 2px">Hello, ${e(S.name)}</h1>${sr('hq',S.hq,'Search companies, roles or experiences')}<div id="list">${LST.home()}</div>${demo}
<div class="card"><div class="row"><div class="stack"><i style="background:#e58c6a">S</i><i style="background:#6a8ae5">A</i><i style="background:#3b3f55">R</i><i class="sk">+5</i></div><div class="ib" data-a="go" data-k="logs" style="width:42px;height:42px">↗</div></div><div class="sub" style="margin-top:12px">Updated today</div><div class="row"><h3 style="font-size:22px;font-weight:400">Your Prep Analytics</h3><span class="sub">4 widgets</span></div><div class="stats" style="margin:12px 0 0"><div class="stt pk"><span class="ti"><i>${ic('plan')}</i>Progress</span><b>${pct()}%</b></div><div class="stt"><span class="ti"><i>${ic('explore')}</i>Companies</span><b>${C.length}</b></div><div class="stt"><span class="ti"><i>${ic('logs')}</i>Experiences</span><b>${L.length}</b></div><div class="stt"><span class="ti"><i>${ic('bm')}</i>Saved</span><b>${S.bm.c.size+S.bm.l.size+S.bm.r.size}</b></div></div></div><div class="card"><h3>Weekly tasks</h3><div class="sub">Tasks planned per day</div><div class="chart">${DAYS.map(d=>{const n=S.tasks.filter(t=>t.day==d).length;return `<div class="${d==TD?'hi':''}">${d==TD?`<em>${n} tasks</em>`:''}<i style="height:${Math.min(20+n*24,92)}px"></i>${d}</div>`}).join('')}</div></div><div class="lb">Quick access</div><div class="grid"><div class="qa" data-a="go" data-k="explore">${ic('explore')}Firms</div><div class="qa" data-a="go" data-k="logs">${ic('logs')}Senior logs</div><div class="qa" data-a="go" data-k="prep">${ic('prep')}Prep Kit</div><div class="qa" data-a="go" data-k="plan">${ic('plan')}My plan · ${pct()}%</div></div>
<div class="lb">Placement updates</div>${U.map(u=>`<div class="card"><h3>${u.t}</h3>${trust(u,u.t)}</div>`).join('')}
<div class="lb">Recently viewed</div><div class="chips">${S.recent.map(r=>`<button class="ch" data-a="openn" data-k="${r}">${r}</button>`).join('')}${S.rl.map(n=>`<button class="ch" data-a="gologs" data-k="${e(n)}">${e(n)} · stories</button>`).join('')}</div>`,
explore:()=>`${sb()}${hdr('Firms')}${sr('eq',S.eq,'Search companies, roles or skills')}<div class="lb">Company type</div>${chips('et',['All','Product','Service','Core'])}<div class="lb">Job role</div>${chips('er',['All','Software','Data','Associate','Graduate'])}<div class="lb">Eligibility (your CGPA)</div>${chips('ec',['Any','6.5','7','7.5'])}<div id="list">${LST.explore()}</div>`,
detail:()=>{const c=C[S.cid];return `${sb()}<div class="top"><button class="ib" data-a="go" data-k="explore" aria-label="Back">${ic('back')}</button><h1 style="font-size:20px">Company details</h1>${bmb('c',c.n)}</div>
<div class="card"><div style="display:flex;gap:12px;align-items:center"><div class="ls">${c.n[0]}</div><div><h3 style="font-size:19px">${c.n}</h3><div class="sub">${c.role} · ${c.type}</div></div></div><div class="p">${c.ov}<br><b>Hiring status:</b> ${HS[c.n]} (sample)</div></div>
<div class="card"><h3>Eligibility</h3><div class="p">${c.el}</div>${trust(c,c.n+' eligibility')}</div>
<div class="card"><h3>Required skills</h3><div>${c.sk.map(s=>`<span class="tag">${s}</span>`).join('')}</div></div>
<div class="card"><h3>Selection rounds</h3>${c.rounds.map((r,i)=>`<div class="st"><i>${i+1}</i><span>${r}</span></div>`).join('')}</div>
<div class="card"><h3>Preparation recommendations</h3><div class="p">Start with: ${c.prep.join(', ')}.</div><div style="margin-top:10px;display:flex;gap:8px"><button class="btn" data-a="gop" data-k="${c.prep[0]}">Open resources</button><button class="btn l" data-a="gologs" data-k="${c.n}">Experiences</button></div></div>${demo}`},
logs:()=>`${sb()}<div class="top"><h1>Senior Logs</h1><button class="btn" data-a="sub">+ Share</button></div>${sr('lq',S.lq,'Search by company or question')}${chips('lr',['All','Aptitude','Technical','HR'])}${chips('ls',['All','Verified','Pending','Outdated'])}<div class="demo">Check the source and status on every story. Not every experience is confirmed.</div><div id="list">${LST.logs()}</div>`,
prep:()=>{const dn=R.filter(r=>S.done.has(r.n)).length;return `${sb()}<div class="top"><div style="flex:1"><h1>Prep Kit</h1><div class="sub">${dn} completed · ${R.length-dn} pending</div></div><button class="ch ${S.sv?'on':''}" data-a="sv">Saved</button><div class="av" data-a="go" data-k="profile">${e(S.name[0])}</div></div>${sr('pq',S.pq,'Search resources')}${chips('pc',['All','Aptitude','DSA','Programming','Technical','Communication','HR'])}${chips('pl',['All levels','Beginner','Intermediate','Advanced'])}<div id="list">${LST.prep()}</div>`},
plan:()=>{const p=pct();return `${sb()}${hdr('My Plan')}<div class="card" style="background:var(--burl)"><div class="sub">Weekly progress</div><div class="big">${p}%</div><div class="bar"><i style="width:${p}%"></i></div><div class="sub" style="margin-top:8px">${S.tasks.filter(t=>t.x).length} of ${S.tasks.length} tasks done</div></div>
<div class="lb">Weekly goals</div><div class="card">${S.goals.map((g,i)=>task(g,i,'goals')).join('')}</div>
<div class="lb">My goal</div><input class="f" id="goal" value="${e(S.goal)}" placeholder="Set a preparation goal">${chips('pt',['Daily','Weekly'])}<div class="lb">Tasks and deadlines</div><div class="card">${S.pt=='Daily'?(S.tasks.map((t,i)=>[t,i]).filter(([t])=>t.day==TD).map(([t,i])=>task(t,i,'tasks')).join('')||'<div class="emp">No tasks for today.<br>Add one below.</div>'):DAYS.map(d=>`<div class="lb">${d}${d==TD?' · today':''}</div>${S.tasks.map((t,i)=>[t,i]).filter(([t])=>t.day==d).map(([t,i])=>task(t,i,'tasks')).join('')||'<div class="sub" style="padding:2px 4px 8px">Free day</div>'}`).join('')}</div>
<div class="card"><h3>Add a task</h3><div style="height:8px"></div><input class="f" id="nt" placeholder="e.g. Revise OS scheduling"><input class="f" id="nd" type="date"><select class="f" id="nday">${DAYS.map(d=>`<option ${d==TD?'selected':''}>${d}</option>`).join('')}</select><button class="btn w" data-a="add">Add task</button></div>`},
profile:()=>`${sb()}<div class="top"><button class="ib" data-a="go" data-k="home" aria-label="Back">${ic('back')}</button><h1 style="font-size:20px">Profile</h1></div>
<div class="card" style="text-align:center"><div class="av" style="width:72px;height:72px;font-size:28px;margin:0 auto 10px;cursor:default">${e(S.name[0])}</div><h3 style="font-size:19px">${e(S.name)}</h3><div class="sub">B.Tech CSE · Final year (sample)<br>shanaya@college.example</div></div>
<div class="lb">Saved companies</div><div class="card">${[...S.bm.c].map(n=>`<div class="tk"><span class="tx">${n}</span><button class="btn l" data-a="openn" data-k="${n}">View</button></div>`).join('')||'<div class="emp">No saved companies yet.</div>'}</div>
<div class="lb">Bookmarked experiences</div><div class="card">${[...S.bm.l].map(k=>{const l=L[parseInt(k.match(/\d+$/))];return l?`<div class="tk"><span class="tx">${e(l.c)} · ${l.r}</span>${badge(l.s)}</div>`:''}).join('')||'<div class="emp">No bookmarked experiences yet.</div>'}</div>
<div class="lb">Settings</div><div class="card"><div class="tk"><span class="tx">Notifications</span><div class="sw ${S.nt?'on':''}" data-a="tgs" data-k="nt"></div></div><div class="tk"><span class="tx">Show outdated warnings</span><div class="sw ${S.ow?'on':''}" data-a="tgs" data-k="ow"></div></div></div><button class="btn l w" data-a="go" data-k="auth">Log out</button>`};

/* ---------- Rendering ---------- */
function render(keep){const sc=$('#sc'),y=sc.scrollTop;sc.innerHTML=V[S.scr]();if(keep)sc.scrollTop=y;else sc.scrollTop=0;
const on=S.scr=='detail'?'explore':S.scr,show=!['splash','auth'].includes(S.scr);$('#nav').style.display=show?'flex':'none';$('#ph').classList.toggle('nonav',!show);$('#ph').dataset.s=S.scr;
$('#nav').innerHTML=NAV.map(([k,l])=>`<button class="${on==k?'on':''}" data-a="go" data-k="${k}">${ic(k)}${l}</button>`).join('');
$('#demo').innerHTML=SCR.map(([k,l])=>`<button class="${S.scr==k?'on':''}" data-a="go" data-k="${k}">${l}</button>`).join('')}
const toast=t=>{const x=$('#ts');x.textContent=t;x.classList.add('on');setTimeout(()=>x.classList.remove('on'),1700)};
const sheet=h=>{$('#sh').innerHTML=h;$('#sh').classList.add('on');$('#bk').classList.add('on')};
const close=()=>{$('#sh').classList.remove('on');$('#bk').classList.remove('on')};
const opt=a=>a.map(x=>`<option>${x}</option>`).join('');
const openC=i=>{S.cid=i;S.recent=[C[i].n,...S.recent.filter(x=>x!=C[i].n)].slice(0,4);close();S.scr='detail';render()};

/* ---------- Actions (all buttons) ---------- */
document.addEventListener('click',ev=>{const t=ev.target.closest('[data-a]');if(!t)return;const a=t.dataset.a,k=t.dataset.k,v=t.dataset.v;
if(a=='fs'){const q=$('#hq');q&&q.focus()}else if(a=='go'){close();S.scr=k;render()}
else if(a=='close')close();
else if(a=='set'){S[k]=v;render(1)}
else if(a=='open')openC(+k);
else if(a=='openn')openC(C.findIndex(c=>c.n==k));
else if(a=='sv'){S.sv=!S.sv;render(1)}
else if(a=='gologs'){close();S.rl=[k,...S.rl.filter(x=>x!=k)].slice(0,3);S.lq=k;S.lr='All';S.ls='All';S.scr='logs';render()}
else if(a=='gop'){S.pc=k;S.scr='prep';render()}
else if(a=='bm'){const s=S.bm[t.dataset.t];s.has(k)?s.delete(k):s.add(k);t.classList.toggle('on');toast(s.has(k)?'Saved':'Removed')}
else if(a=='done'){S.done.has(k)?S.done.delete(k):S.done.add(k);render(1)}
else if(a=='tg'){S[t.dataset.t][k].x^=1;render(1)}
else if(a=='del'){S.tasks.splice(k,1);render(1)}
else if(a=='tgs'){S[k]=!S[k];render(1)}
else if(a=='add'){const x=$('#nt').value.trim();if(!x){toast('Type a task first');return}const d=$('#nd').value;S.tasks.push({t:x,due:d?new Date(d).toLocaleDateString('en-GB',{day:'2-digit',month:'short'}):'',day:$('#nday').value,x:0});render(1)}
else if(a=='login'){const n=$('#an'),m=$('#ae');if(n&&n.value.trim())S.name=n.value.trim().split(' ')[0];S.scr='home';render();toast('Welcome, '+S.name)}
else if(a=='rep')sheet(`<h3 style="font-size:20px;margin-bottom:4px">Report incorrect information</h3><p class="sub" style="margin-bottom:12px">${e(k)}</p><select class="f" id="rr">${opt(['Eligibility is wrong','Date or deadline is wrong','Information is outdated','Source looks unreliable','Other'])}</select><textarea class="f" id="rt" placeholder="What should be corrected? (optional)"></textarea><div class="row"><button class="btn l" data-a="close">Cancel</button><button class="btn" data-a="sendrep">Send report</button></div>`)
else if(a=='sendrep'){close();toast('Report sent for review (demo)')}
else if(a=='sub')sheet(`<h3 style="font-size:20px;margin-bottom:10px">Share your experience</h3><select class="f" id="sc1">${opt(C.map(c=>c.n))}</select><select class="f" id="sr1">${opt(['Aptitude','Technical','HR'])}</select><textarea class="f" id="sq" placeholder="Questions you were asked (one per line)"></textarea><textarea class="f" id="st" placeholder="Tips for juniors"></textarea><p class="sub" style="margin-bottom:12px">Your post will show as “Pending verification” until the team checks it.</p><div class="row"><button class="btn l" data-a="close">Cancel</button><button class="btn" data-a="post">Submit</button></div>`)
else if(a=='post'){const q=$('#sq').value.trim();if(!q){toast('Add at least one question');return}L.unshift({c:$('#sc1').value,r:$('#sr1').value,q:q.split('\n'),tip:$('#st').value.trim()||'No tip added.',by:'Student (you)',s:'P',src:'Student submission, not yet checked',d:'18 Nov 2026'});close();S.lq='';S.lr='All';S.ls='All';S.scr='logs';render();toast('Submitted as pending')}});
// Live search: update only the list so the keyboard stays open
document.addEventListener('input',ev=>{const id=ev.target.id;if(id=='goal')S.goal=ev.target.value;if(['hq','eq','lq','pq'].includes(id)){S[id]=ev.target.value;$('#list').innerHTML=LST[S.scr]()}});
function fit(){} // layout is handled by CSS media queries
addEventListener('resize',fit);fit();render();
setTimeout(()=>{if(S.scr=='splash'){S.scr='auth';render()}},2600); // splash auto-advances
