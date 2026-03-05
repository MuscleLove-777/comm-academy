/* ============================================
   コミュニケーションアカデミー - Level 2: 初対面の会話術
   ============================================ */

const LEVEL2_DATA = {
    id: 2,
    title: "初対面の会話術",
    icon: "💬",
    description: "最初の会話をスムーズに進める技術を身につける",
    modules: [

        // =============================================
        // Module 201: 自己紹介のフレームワーク
        // =============================================
        {
            id: 201,
            title: "自己紹介のフレームワーク",
            duration: "10分",
            content: `
<h2>🎤 自己紹介のフレームワーク</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>自己紹介は「名前と所属を言うだけ」ではありません。<strong>会話のきっかけを提供する</strong>のが本当の目的です。</p>
</div>

<h3>📐 30秒自己紹介フレームワーク</h3>

<div class="visual-box">
<div class="visual-box-title">自己紹介の4ステップ</div>
<div style="display:flex;flex-direction:column;gap:8px;padding:15px;max-width:500px;margin:0 auto;">
<div style="background:#E3F2FD;border-left:4px solid #1976D2;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>① 名前</strong>：「はじめまして、〇〇と申します」
</div>
<div style="background:#FFF3E0;border-left:4px solid #E85D04;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>② 所属・役割</strong>：「〇〇で△△をしています」
</div>
<div style="background:#E8F5E9;border-left:4px solid #4CAF50;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>③ フック（引っかかり）</strong>：相手が興味を持ちそうな一言
</div>
<div style="background:#F3E5F5;border-left:4px solid #7B1FA2;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>④ つなぎ</strong>：「〇〇さんは？」と相手に振る
</div>
</div>
</div>

<h3>🎯 良い自己紹介の例</h3>

<div class="scenario-box">
<div class="scenario-box-title">📝 シーン：ビジネス交流会</div>
<p class="bad">❌ 悪い例：「田中です。IT企業で働いています。」（会話が広がらない）</p>
<p class="good">✅ 良い例：「田中と申します。IT企業でアプリ開発をしていまして、最近は子どもの学習アプリに力を入れています。お子さんのいる方にはよく興味を持っていただけるんですが、〇〇さんはどんなお仕事をされているんですか？」</p>
</div>

<div class="info-box formula">
<div class="info-box-title">🔑 「フック」のコツ</div>
<p>フックとは<strong>相手が「もっと知りたい」と思う要素</strong>です。以下が効果的：</p>
<ul>
<li><strong>具体的なエピソード</strong>：「最近〇〇をしていまして...」</li>
<li><strong>共通点になりそうな話題</strong>：趣味・出身地・最近ハマっていること</li>
<li><strong>意外性</strong>：「実は〇〇なんです」</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>自己紹介は<strong>会話のきっかけ作り</strong>が目的</li>
<li><strong>名前→所属→フック→つなぎ</strong>の4ステップ</li>
<li>最後は必ず<strong>相手に質問を振る</strong></li>
</ul>
</div>
`,
            quiz: [
                { id: "q201_1", type: "choice", question: "自己紹介で最も重要な要素は何ですか？", options: ["正確な肩書きを伝えること", "できるだけ短くすること", "会話のきっかけ（フック）を含めること", "声を大きくすること"], answer: 2, explanation: "自己紹介の本質は会話のきっかけを作ることです。フックを含めることで、相手が質問しやすくなります。" },
                { id: "q201_2", type: "choice", question: "自己紹介の最後にすべきことは？", options: ["お辞儀をする", "名刺を渡す", "相手に質問を振る", "もう一度名前を言う"], answer: 2, explanation: "自己紹介の最後は「○○さんは？」と相手に振ることで、自然な会話の流れが生まれます。" },
            ]
        },

        // =============================================
        // Module 202: アイスブレイクのテクニック
        // =============================================
        {
            id: 202,
            title: "アイスブレイクのテクニック",
            duration: "12分",
            content: `
<h2>🧊 アイスブレイクのテクニック</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>アイスブレイクとは<strong>初対面の緊張（氷）を砕く</strong>ための軽い会話や話題のことです。重い話題や個人的すぎる質問は避け、誰でも答えやすい話題から始めましょう。</p>
</div>

<h3>🎯 「木戸に立ちかけし衣食住」の法則</h3>

<div class="visual-box">
<div class="visual-box-title">万能トピック集</div>
<table style="width:100%;border-collapse:collapse;">
<tr><th style="width:60px;">頭文字</th><th>トピック</th><th>例</th></tr>
<tr><td style="font-weight:700;color:#E85D04;">き</td><td>気候・季節</td><td>「今日は暖かいですね」</td></tr>
<tr><td style="font-weight:700;color:#E85D04;">ど</td><td>道楽（趣味）</td><td>「休日はどう過ごされますか？」</td></tr>
<tr><td style="font-weight:700;color:#E85D04;">に</td><td>ニュース</td><td>「最近〇〇が話題ですよね」</td></tr>
<tr><td style="font-weight:700;color:#E85D04;">た</td><td>旅</td><td>「最近どこか行かれましたか？」</td></tr>
<tr><td style="font-weight:700;color:#E85D04;">ち</td><td>知人</td><td>「〇〇さんとはどういうご関係で？」</td></tr>
<tr><td style="font-weight:700;color:#E85D04;">か</td><td>家族</td><td>「ご出身はどちらですか？」</td></tr>
<tr><td style="font-weight:700;color:#E85D04;">け</td><td>健康</td><td>「最近何か運動されてますか？」</td></tr>
<tr><td style="font-weight:700;color:#E85D04;">し</td><td>仕事</td><td>「お仕事はどんなことを？」</td></tr>
<tr><td style="font-weight:700;color:#E85D04;">衣</td><td>衣（ファッション）</td><td>「素敵なネクタイですね」</td></tr>
<tr><td style="font-weight:700;color:#E85D04;">食</td><td>食べ物</td><td>「この辺でおすすめのお店あります？」</td></tr>
<tr><td style="font-weight:700;color:#E85D04;">住</td><td>住まい</td><td>「お住まいはこの辺ですか？」</td></tr>
</table>
</div>

<h3>🚫 避けるべきNG話題</h3>

<div class="info-box danger">
<div class="info-box-title">⛔ 初対面でのNG話題</div>
<ul>
<li><strong>政治・宗教</strong>：意見が分かれやすく対立のリスク</li>
<li><strong>収入・年齢</strong>：プライバシーに踏み込みすぎ</li>
<li><strong>容姿への評価</strong>：不快に感じる人がいる</li>
<li><strong>自慢話</strong>：「すごいですね」を求める一方的な会話</li>
<li><strong>悪口・愚痴</strong>：ネガティブな印象になる</li>
</ul>
</div>

<h3>💡 場の観察から話題を見つける</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>環境をネタにする</strong>
「この会場、素敵ですね」「あの料理美味しそうですね」
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>共通体験をネタにする</strong>
「このイベント初めてですか？」「今の講演、面白かったですね」
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>相手の持ち物をネタにする</strong>
「そのバッグ素敵ですね、どちらのですか？」
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li><strong>「木戸に立ちかけし衣食住」</strong>で話題に困らない</li>
<li>政治・宗教・収入はNG</li>
<li>場の観察から<strong>共通のネタ</strong>を見つけるのが最も自然</li>
</ul>
</div>
`,
            quiz: [
                { id: "q202_1", type: "choice", question: "初対面の相手に避けるべき話題はどれですか？", options: ["趣味について", "最近のニュースについて", "相手の年収について", "出身地について"], answer: 2, explanation: "年収はプライバシーに深く踏み込む話題で、初対面では避けるべきです。" },
                { id: "q202_2", type: "choice", question: "「木戸に立ちかけし衣食住」の「ど」は何の話題ですか？", options: ["道路", "道楽（趣味）", "道徳", "どこ出身"], answer: 1, explanation: "「ど」は道楽、つまり趣味の話題です。「休日はどう過ごされますか？」などが使えます。" },
            ]
        },

        // =============================================
        // Module 203: 質問力を鍛える
        // =============================================
        {
            id: 203,
            title: "質問力を鍛える",
            duration: "12分",
            content: `
<h2>❓ 質問力を鍛える</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>会話が上手い人は<strong>話し上手ではなく「聞き上手」</strong>です。良い質問ができれば、相手が気持ちよく話してくれます。</p>
</div>

<h3>🔓 オープンクエスチョン vs 🔒 クローズドクエスチョン</h3>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #4CAF50;">
<h4 style="color:#4CAF50;">🔓 オープンクエスチョン</h4>
<p>自由に答えられる質問。会話が広がる。</p>
<ul>
<li>「どんなお仕事をされているんですか？」</li>
<li>「何がきっかけで始められたんですか？」</li>
<li>「休日はどう過ごされますか？」</li>
</ul>
<p style="font-size:0.85rem;color:#888;">→ 相手が話しやすい</p>
</div>
<div class="compare-card" style="border-left:4px solid #1976D2;">
<h4 style="color:#1976D2;">🔒 クローズドクエスチョン</h4>
<p>「はい/いいえ」で答えられる質問。</p>
<ul>
<li>「お仕事はIT関係ですか？」</li>
<li>「この辺りにお住まいですか？」</li>
<li>「初めて来られましたか？」</li>
</ul>
<p style="font-size:0.85rem;color:#888;">→ 事実確認に向く</p>
</div>
</div>

<h3>🔄 質問のテクニック：深掘り</h3>

<div class="visual-box">
<div class="visual-box-title">会話を深掘りする質問の流れ</div>
<div style="display:flex;flex-direction:column;gap:4px;padding:15px;max-width:500px;margin:0 auto;text-align:left;">
<div style="background:#E3F2FD;padding:10px 16px;border-radius:8px;">
相手：「旅行が趣味なんです」
</div>
<div style="text-align:center;">↓</div>
<div style="background:#FFF3E0;padding:10px 16px;border-radius:8px;">
あなた：「いいですね！最近はどこに行かれましたか？」（どこ）
</div>
<div style="text-align:center;">↓</div>
<div style="background:#E3F2FD;padding:10px 16px;border-radius:8px;">
相手：「先月、京都に行ってきました」
</div>
<div style="text-align:center;">↓</div>
<div style="background:#FFF3E0;padding:10px 16px;border-radius:8px;">
あなた：「京都！何がきっかけで？」（なぜ）
</div>
<div style="text-align:center;">↓</div>
<div style="background:#E3F2FD;padding:10px 16px;border-radius:8px;">
相手：「紅葉が見たくて。すごくきれいでしたよ」
</div>
<div style="text-align:center;">↓</div>
<div style="background:#FFF3E0;padding:10px 16px;border-radius:8px;">
あなた：「紅葉いいですね！特にどこがおすすめでしたか？」（具体化）
</div>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">🔑 深掘り質問の5W1H</div>
<p>相手の発言に対して以下の切り口で質問すると、自然に会話が深まります：</p>
<ul>
<li><strong>What</strong>：「具体的にどんな？」</li>
<li><strong>Why</strong>：「何がきっかけで？」</li>
<li><strong>How</strong>：「どうやって？」</li>
<li><strong>When</strong>：「いつ頃から？」</li>
<li><strong>Where</strong>：「どこで？」</li>
<li><strong>感情</strong>：「それってどんな気持ちでした？」</li>
</ul>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 質問の注意点</div>
<ul>
<li><strong>尋問にならない</strong>：質問攻めは相手を疲れさせる。質問と自分の話を交互に</li>
<li><strong>「なぜ？」の使い方</strong>：ストレートな「なぜ？」は詰問に聞こえることも。「何がきっかけで？」に言い換える</li>
<li><strong>相手の答えに反応する</strong>：質問→回答→反応→次の質問、のリズムが大切</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li><strong>オープンクエスチョン</strong>で会話を広げる</li>
<li><strong>5W1H</strong>で自然に深掘りする</li>
<li>質問→回答→<strong>リアクション</strong>→次の質問のリズムを大切に</li>
</ul>
</div>
`,
            quiz: [
                { id: "q203_1", type: "choice", question: "会話を広げやすい質問の種類はどれですか？", options: ["クローズドクエスチョン", "オープンクエスチョン", "誘導質問", "修辞疑問"], answer: 1, explanation: "オープンクエスチョンは「はい/いいえ」では答えられないため、相手が自由に話しやすく会話が広がります。" },
                { id: "q203_2", type: "choice", question: "「なぜそうしたんですか？」をより柔らかく言い換えるとどうなりますか？", options: ["「どうしてですか？」", "「理由は？」", "「何がきっかけで？」", "「根拠は？」"], answer: 2, explanation: "「何がきっかけで？」は「なぜ？」より柔らかく、相手が答えやすい表現です。" },
            ]
        },

        // =============================================
        // Module 204: 傾聴のスキル
        // =============================================
        {
            id: 204,
            title: "傾聴のスキル",
            duration: "12分",
            content: `
<h2>👂 傾聴のスキル</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>傾聴（アクティブリスニング）とは、<strong>相手の話を積極的に聴き、理解を示す</strong>スキルです。「聞く」のではなく「聴く」ことが大切です。</p>
</div>

<h3>👂 「聞く」vs「聴く」</h3>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #EF4444;">
<h4 style="color:#EF4444;">🔇 受動的に「聞く」</h4>
<ul>
<li>相手の話が耳に入っているだけ</li>
<li>次に自分が何を話すか考えている</li>
<li>スマホをチラチラ見る</li>
<li>「へー」「ふーん」だけの相づち</li>
</ul>
</div>
<div class="compare-card" style="border-left:4px solid #4CAF50;">
<h4 style="color:#4CAF50;">👂 積極的に「聴く」</h4>
<ul>
<li>相手の言葉と感情を理解しようとする</li>
<li>適切なタイミングでうなずく</li>
<li>体を相手に向け、アイコンタクト</li>
<li>相手の言葉を受け止めて返す</li>
</ul>
</div>
</div>

<h3>🛠 傾聴の5つのテクニック</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>うなずき・あいづち</strong>
「はい」「なるほど」「そうなんですね」で「聴いている」サインを送る。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>バックトラッキング（オウム返し）</strong>
相手の言葉をそのまま繰り返す。「京都に行ったんです」→「京都に行かれたんですね！」
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>パラフレーズ（言い換え）</strong>
相手の話を自分の言葉で要約。「つまり、〇〇ということですね」
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>感情の反映</strong>
相手の感情を言語化する。「それは嬉しかったでしょうね」「大変だったんですね」
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>沈黙を恐れない</strong>
相手が考えているときは、急かさずに待つ。沈黙も大切なコミュニケーション。
</div>
</div>
</div>

<h3>🎯 実践例</h3>

<div class="scenario-box">
<div class="scenario-box-title">📝 シーン：相手が仕事の悩みを話してくれた</div>
<p class="bad">❌ 悪い例：「わかるわかる！俺もさ〜」（すぐ自分の話にする）</p>
<p class="bad">❌ 悪い例：「そんなの気にしなくていいよ」（相手の気持ちを否定）</p>
<p class="good">✅ 良い例：「そうなんですね...。それは大変でしたね（感情の反映）。具体的にはどんな状況だったんですか？（深掘り質問）」</p>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li><strong>アクティブリスニング</strong>で「聴いている」ことを伝える</li>
<li><strong>バックトラッキング</strong>と<strong>パラフレーズ</strong>で理解を示す</li>
<li>相手の<strong>感情を言語化</strong>して共感を伝える</li>
<li>すぐに自分の話やアドバイスに持っていかない</li>
</ul>
</div>
`,
            quiz: [
                { id: "q204_1", type: "choice", question: "相手の言葉をそのまま繰り返すテクニックを何と言いますか？", options: ["パラフレーズ", "バックトラッキング", "リフレクション", "サマライズ"], answer: 1, explanation: "バックトラッキング（オウム返し）は、相手の言葉をそのまま繰り返すことで「聴いている」ことを伝えるテクニックです。" },
                { id: "q204_2", type: "choice", question: "相手が悩みを話しているとき、避けるべき反応はどれですか？", options: ["「それは大変でしたね」と共感する", "「そんなの気にしなくていいよ」と励ます", "「具体的にはどんな状況でしたか？」と質問する", "うなずきながら聴く"], answer: 1, explanation: "「気にしなくていいよ」は相手の気持ちを否定することになります。まずは共感して受け止めることが大切です。" },
                { id: "q204_3", type: "choice", question: "アクティブリスニングの特徴として正しくないものはどれですか？", options: ["相手の話を聴きながら、次に自分が話すことを考える", "適切なタイミングでうなずく", "相手の感情を言語化する", "相手に体を向けてアイコンタクトをとる"], answer: 0, explanation: "次に自分が話すことを考えるのは受動的な「聞く」です。アクティブリスニングでは相手の言葉と感情に集中します。" },
            ]
        },
    ]
};
