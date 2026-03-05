/* ============================================
   コミュニケーションアカデミー - Main Application
   ============================================ */
const App = {
    levels: [], allModules: [], currentModuleId: null, progress: {}, quizResults: {},

    init() {
        this.levels = [LEVEL1_DATA, LEVEL2_DATA, LEVEL3_DATA, LEVEL4_DATA, LEVEL5_DATA, LEVEL6_DATA];
        this.allModules = [];
        this.levels.forEach(level => { level.modules.forEach(mod => { this.allModules.push({ ...mod, levelId: level.id, levelTitle: level.title }); }); });
        this.loadProgress(); this.buildSidebar(); this.showDashboard();
        if (localStorage.getItem('comm-darkmode') === 'true') document.documentElement.setAttribute('data-theme', 'dark');
        this.updateGlobalProgress();
        document.addEventListener('click', (e) => { const h = e.target.closest('.collapsible-header'); if (h) h.parentElement.classList.toggle('open'); });
    },

    loadProgress() {
        try { const s = localStorage.getItem('comm-progress'); if (s) this.progress = JSON.parse(s);
            const sq = localStorage.getItem('comm-quiz-results'); if (sq) this.quizResults = JSON.parse(sq);
        } catch (e) { this.progress = {}; this.quizResults = {}; }
    },

    saveProgress() { localStorage.setItem('comm-progress', JSON.stringify(this.progress)); localStorage.setItem('comm-quiz-results', JSON.stringify(this.quizResults)); },
    completeModule(id) { this.progress[id] = { completed: true, completedAt: new Date().toISOString() }; this.saveProgress(); this.buildSidebar(); this.updateGlobalProgress(); },
    saveQuizResult(id, result) { this.quizResults[id] = { ...result, attemptedAt: new Date().toISOString() }; this.saveProgress(); },
    isModuleCompleted(id) { return this.progress[id] && this.progress[id].completed; },

    updateGlobalProgress() {
        const total = this.allModules.length, completed = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
        const fill = document.getElementById('globalProgressFill'), text = document.getElementById('globalProgressText');
        if (fill) fill.style.width = pct + '%'; if (text) text.textContent = `${pct}% 完了 (${completed}/${total})`;
    },

    buildSidebar() {
        const nav = document.getElementById('sidebarNav'); let html = '';
        this.levels.forEach(level => {
            const mods = level.modules, done = mods.filter(m => this.isModuleCompleted(m.id)).length;
            const isCurrent = this.currentModuleId && mods.some(m => m.id === this.currentModuleId);
            html += `<div class="sidebar-level"><div class="sidebar-level-header ${isCurrent ? 'expanded' : ''}" onclick="App.toggleLevel(this)">
                <span>${level.icon} Lv${level.id}: ${level.title}</span>
                <span style="display:flex;align-items:center;gap:8px;"><span style="font-size:0.7rem;opacity:0.7;">${done}/${mods.length}</span><span class="chevron">▶</span></span>
                </div><div class="sidebar-modules ${isCurrent ? 'expanded' : ''}">`;
            mods.forEach(mod => {
                html += `<div class="sidebar-item ${this.isModuleCompleted(mod.id)?'completed':''} ${this.currentModuleId===mod.id?'active':''}" onclick="App.showModule(${mod.id})">
                    <span class="status-dot"></span><span>${mod.title}</span></div>`;
            });
            html += '</div></div>';
        });
        nav.innerHTML = html;
    },

    toggleLevel(h) { h.classList.toggle('expanded'); h.nextElementSibling.classList.toggle('expanded'); },
    toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); },

    showDashboard() {
        this.currentModuleId = null; this.showView('dashboardView'); this.buildSidebar();
        const c = document.getElementById('dashboardView');
        const total = this.allModules.length, done = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const quizzes = Object.keys(this.quizResults).length;
        const avg = quizzes > 0 ? Math.round(Object.values(this.quizResults).reduce((s, r) => s + r.percentage, 0) / quizzes) : 0;
        let html = `<div class="fade-in"><div class="dashboard-hero"><h2>コミュニケーションアカデミーへようこそ</h2>
            <p>初対面でも大丈夫！人間関係をゼロから築くためのコミュニケーション術を体系的に学べる総合学習プラットフォームです。</p></div>
            <div class="dashboard-grid">
                <div class="stat-card"><div class="stat-value">${done}/${total}</div><div class="stat-label">モジュール完了</div></div>
                <div class="stat-card"><div class="stat-value">${quizzes}</div><div class="stat-label">クイズ受験数</div></div>
                <div class="stat-card"><div class="stat-value">${avg}%</div><div class="stat-label">平均スコア</div></div>
                <div class="stat-card"><div class="stat-value">${this.getEstimatedTime()}</div><div class="stat-label">残り学習時間</div></div>
            </div><h2 style="margin-bottom:20px;font-size:1.3rem;">学習コース</h2><div class="dashboard-grid">`;
        this.levels.forEach(level => {
            const mods = level.modules, d = mods.filter(m => this.isModuleCompleted(m.id)).length, pct = Math.round((d / mods.length) * 100);
            html += `<div class="level-card level-${level.id}" onclick="App.showModule(${mods[0].id})">
                <div class="level-card-header"><div class="level-icon">${level.icon}</div><div><h3>Level ${level.id}: ${level.title}</h3>
                <div class="level-desc">${level.description} (${mods.length}モジュール)</div></div></div>
                <div class="level-progress"><div class="level-progress-bar"><div class="level-progress-fill" style="width:${pct}%"></div></div>
                <div class="level-progress-text">${d}/${mods.length} 完了 (${pct}%)</div></div></div>`;
        });
        html += '</div></div>'; c.innerHTML = html;
    },

    getEstimatedTime() {
        let t = 0; this.allModules.forEach(m => { if (!this.isModuleCompleted(m.id)) { const match = m.duration.match(/(\d+)/); if (match) t += parseInt(match[1]); } });
        if (t === 0) return '完了！'; const h = Math.floor(t / 60), mins = t % 60; return h > 0 ? `約${h}時間${mins}分` : `約${mins}分`;
    },

    showModule(moduleId) {
        const mod = this.allModules.find(m => m.id === moduleId); if (!mod) return;
        this.currentModuleId = moduleId; this.showView('moduleView'); this.buildSidebar();
        document.getElementById('sidebar').classList.remove('open');
        const c = document.getElementById('moduleView'), level = this.levels.find(l => l.id === mod.levelId);
        const idx = this.allModules.findIndex(m => m.id === moduleId);
        const prev = idx > 0 ? this.allModules[idx - 1] : null, next = idx < this.allModules.length - 1 ? this.allModules[idx + 1] : null;
        let html = `<div class="fade-in"><div class="module-header">
            <div class="module-breadcrumb"><a onclick="App.showDashboard()">ダッシュボード</a> / <a onclick="App.showModule(${level.modules[0].id})">Level ${level.id}: ${level.title}</a> / ${mod.title}</div>
            <h1 class="module-title">${mod.title}</h1>
            <div class="module-meta"><span>⏱ ${mod.duration}</span><span>${this.isModuleCompleted(moduleId) ? '✅ 完了済み' : '📖 未完了'}</span></div></div>
            <div class="module-body">${mod.content}</div>
            <div class="module-nav"><div>${prev ? `<button class="btn btn-outline" onclick="App.showModule(${prev.id})">← ${prev.title}</button>` : ''}</div>
            <div style="display:flex;gap:12px;">${mod.quiz && mod.quiz.length > 0
                ? `<button class="btn btn-primary btn-lg" onclick="App.startQuiz(${moduleId})">理解度チェック (${mod.quiz.length}問)</button>`
                : `<button class="btn btn-success btn-lg" onclick="App.completeModule(${moduleId}); App.goToNextModule(${moduleId});">完了して次へ</button>`}</div>
            <div>${next ? `<button class="btn btn-outline" onclick="App.showModule(${next.id})">${next.title} →</button>` : ''}</div></div></div>`;
        c.innerHTML = html; document.querySelector('.content').scrollTop = 0;
    },

    startQuiz(moduleId) { const mod = this.allModules.find(m => m.id === moduleId); if (!mod || !mod.quiz) return; this.showView('quizView'); Quiz.start(moduleId, mod.quiz); },
    goToNextModule(id) { const idx = this.allModules.findIndex(m => m.id === id); if (idx < this.allModules.length - 1) this.showModule(this.allModules[idx + 1].id); else { this.showDashboard(); this.showCompletionMessage(); } },

    showCompletionMessage() {
        document.getElementById('modalContent').innerHTML = `<h2>🎓 おめでとうございます！</h2>
            <div class="score-circle pass" style="font-size:2.5rem;">🏆</div>
            <p>全モジュール完了！<br>コミュニケーションの全スキルを学習しました。<br>実践で磨いていきましょう！</p>
            <div class="modal-actions"><button class="btn btn-primary" onclick="App.closeModal()">ダッシュボードへ</button></div>`;
        document.getElementById('modalOverlay').style.display = 'flex';
    },

    closeModal() { document.getElementById('modalOverlay').style.display = 'none'; },
    showView(viewId) { ['dashboardView','moduleView','quizView','referenceView'].forEach(id => { document.getElementById(id).style.display = id === viewId ? 'block' : 'none'; }); },
    toggleDarkMode() { const d = document.documentElement.getAttribute('data-theme') === 'dark'; if (d) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('comm-darkmode','false'); } else { document.documentElement.setAttribute('data-theme','dark'); localStorage.setItem('comm-darkmode','true'); } },
    resetProgress() { if (confirm('全ての学習進捗をリセットしますか？')) { this.progress = {}; this.quizResults = {}; localStorage.removeItem('comm-progress'); localStorage.removeItem('comm-quiz-results'); this.buildSidebar(); this.updateGlobalProgress(); this.showDashboard(); } },

    showReference() {
        this.showView('referenceView'); this.buildSidebar();
        const c = document.getElementById('referenceView');
        const sections = [
            { category: '第一印象', terms: [
                { name: 'メラビアンの法則', desc: '印象形成における視覚（55%）・聴覚（38%）・言語（7%）の影響比率' },
                { name: '初頭効果', desc: '最初に得た情報が全体の印象を大きく左右する心理現象' },
                { name: 'ハロー効果', desc: 'ある特徴の印象が他の特徴の評価にも影響する現象' },
                { name: 'ミラーリング', desc: '相手の姿勢や動作を自然に模倣して親近感を生む技法' },
            ]},
            { category: '会話スキル', terms: [
                { name: 'アクティブリスニング', desc: '相手の話を積極的に聴き、理解を示す傾聴技法' },
                { name: 'オープンクエスチョン', desc: '「はい/いいえ」では答えられない、会話を広げる質問' },
                { name: 'クローズドクエスチョン', desc: '「はい/いいえ」で答えられる、事実確認向きの質問' },
                { name: 'バックトラッキング', desc: '相手の言葉を繰り返して「聴いている」ことを伝える技法' },
                { name: 'パラフレーズ', desc: '相手の発言を自分の言葉で言い換えて確認する技法' },
                { name: 'アイスブレイク', desc: '初対面の緊張を和らげるための軽い会話や活動' },
            ]},
            { category: '関係構築', terms: [
                { name: 'ラポール', desc: '相互信頼に基づいた心の通い合う関係性' },
                { name: '自己開示', desc: '自分のプライベートな情報や感情を相手に伝えること' },
                { name: '返報性の原理', desc: '何かをしてもらうとお返しをしたくなる心理的傾向' },
                { name: '単純接触効果', desc: '繰り返し接触することで好意度が増す現象' },
                { name: '社会的浸透理論', desc: '自己開示の深さと幅が関係の親密度を決めるという理論' },
            ]},
            { category: '非言語コミュニケーション', terms: [
                { name: 'アイコンタクト', desc: '適切な視線の合わせ方で信頼と関心を示す技法' },
                { name: 'プロクセミクス', desc: '対人距離（パーソナルスペース）に関する理論' },
                { name: 'ジェスチャー', desc: '手や体の動きで言葉を補完するボディランゲージ' },
                { name: 'パラ言語', desc: '声のトーン・速度・大きさなど言語以外の音声要素' },
                { name: 'マイクロ表情', desc: '一瞬だけ現れる無意識の表情で本音を読み取る手がかり' },
            ]},
            { category: '対人心理学', terms: [
                { name: 'アサーション', desc: '自分も相手も尊重した自己主張のコミュニケーション' },
                { name: 'Iメッセージ', desc: '「私は〜」と主語を自分にして気持ちを伝える方法' },
                { name: 'YOUメッセージ', desc: '「あなたは〜」と相手を主語にした伝え方（攻撃的になりやすい）' },
                { name: 'ジョハリの窓', desc: '自己認識と他者認識の4つの領域を示すモデル' },
                { name: 'コンフリクトマネジメント', desc: '対立や意見の衝突を建設的に解決するスキル' },
            ]}
        ];
        const colors = { '第一印象': '#e85d04', '会話スキル': '#0891b2', '関係構築': '#7c3aed', '非言語コミュニケーション': '#059669', '対人心理学': '#2563eb' };
        let html = `<div class="fade-in"><h1 style="font-size:1.6rem;margin-bottom:8px;">用語リファレンス</h1>
            <p style="color:var(--text-secondary);margin-bottom:24px;">コミュニケーションで使われる重要用語の一覧です。</p>
            <div class="reference-search"><input type="text" id="refSearchInput" placeholder="用語名で検索..." oninput="App.filterReference()"></div>`;
        sections.forEach(s => {
            html += `<div class="ref-domain-section"><h2 style="font-size:1.2rem;margin:24px 0 12px;color:${colors[s.category] || '#333'}">${s.category}</h2><div style="display:grid;gap:8px;">`;
            s.terms.forEach(t => {
                html += `<div class="ref-var-row" data-var="${t.name}" style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;display:flex;align-items:center;gap:16px;border-left:4px solid ${colors[s.category] || '#333'}">
                    <div style="min-width:160px;font-weight:700;font-size:0.95rem;">${t.name}</div><div style="font-size:0.85rem;color:var(--text-secondary)">${t.desc}</div></div>`;
            });
            html += '</div></div>';
        });
        html += '</div>'; c.innerHTML = html;
    },

    filterReference() {
        const q = document.getElementById('refSearchInput').value.toLowerCase().trim();
        document.querySelectorAll('.ref-var-row').forEach(r => { r.style.display = (!q || r.getAttribute('data-var').toLowerCase().includes(q)) ? '' : 'none'; });
    }
};

document.addEventListener('DOMContentLoaded', () => { App.init(); });
