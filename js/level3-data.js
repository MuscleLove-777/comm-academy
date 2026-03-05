/* ============================================
   コミュニケーションアカデミー - Level 3: 信頼関係の構築
   ============================================ */

const LEVEL3_DATA = {
    id: 3,
    title: "信頼関係の構築",
    icon: "🔗",
    description: "ラポール形成と共感のスキルを磨く",
    modules: [

        // =============================================
        // Module 301: ラポール形成の基本
        // =============================================
        {
            id: 301,
            title: "ラポール形成の基本",
            duration: "10分",
            content: `
<h2>🔗 ラポール形成の基本</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>ラポール（rapport）とは、フランス語で「橋をかける」という意味。<strong>相互信頼に基づいた心の通い合う関係性</strong>のことです。</p>
</div>

<h3>🌉 ラポールの3要素</h3>

<div class="visual-box">
<div class="visual-box-title">ラポールを支える3本の柱</div>
<div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;padding:15px 0;">
<div style="background:#E3F2FD;border:2px solid #1976D2;border-radius:12px;padding:20px;text-align:center;min-width:150px;">
<div style="font-size:2rem;">🤝</div>
<div style="font-weight:700;font-size:1rem;">相互尊重</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">相手の価値観を<br>認める</div>
</div>
<div style="background:#FFF3E0;border:2px solid #E85D04;border-radius:12px;padding:20px;text-align:center;min-width:150px;">
<div style="font-size:2rem;">💛</div>
<div style="font-weight:700;font-size:1rem;">共感</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">相手の気持ちに<br>寄り添う</div>
</div>
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:20px;text-align:center;min-width:150px;">
<div style="font-size:2rem;">🎯</div>
<div style="font-weight:700;font-size:1rem;">類似性</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">共通点を<br>見つける</div>
</div>
</div>
</div>

<h3>🪞 ミラーリング</h3>

<p>ミラーリングとは、<strong>相手の姿勢・動作・話し方を自然に合わせる</strong>テクニックです。人は自分と似た人に親近感を持つ傾向があります。</p>

<table>
<tr><th>合わせる要素</th><th>具体例</th><th>注意点</th></tr>
<tr><td>姿勢</td><td>相手が前傾なら自分も少し前傾</td><td>わざとらしくならないこと</td></tr>
<tr><td>話すスピード</td><td>相手がゆっくりなら自分もゆっくり</td><td>自然なペースで</td></tr>
<tr><td>声のトーン</td><td>相手が穏やかなら穏やかに</td><td>極端に変えない</td></tr>
<tr><td>言葉遣い</td><td>相手が使う言葉を取り入れる</td><td>相手の口癖をバカにしない</td></tr>
</table>

<h3>🔍 共通点を見つける</h3>

<div class="info-box formula">
<div class="info-box-title">🔑 共通点発見の5つの領域</div>
<ul>
<li><strong>出身地・住まい</strong>：「実は同じ県の出身なんですね！」</li>
<li><strong>趣味・好み</strong>：「私も映画好きです！」</li>
<li><strong>経験</strong>：「私も転職経験があるんです」</li>
<li><strong>価値観</strong>：「私もそう思います」</li>
<li><strong>知人</strong>：「〇〇さんを知っているんですか！」</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>ラポールは<strong>相互尊重・共感・類似性</strong>の3要素</li>
<li><strong>ミラーリング</strong>で自然に親近感を築く</li>
<li><strong>共通点</strong>を積極的に見つけて伝える</li>
</ul>
</div>
`,
            quiz: [
                { id: "q301_1", type: "choice", question: "ラポール（rapport）の意味として最も適切なのはどれですか？", options: ["上下関係", "心の通い合う信頼関係", "ビジネス契約", "表面的な付き合い"], answer: 1, explanation: "ラポールとは相互信頼に基づいた心の通い合う関係性のことです。フランス語で「橋をかける」が語源です。" },
                { id: "q301_2", type: "choice", question: "ミラーリングで気をつけるべきことは何ですか？", options: ["できるだけ大げさにやる", "わざとらしくならないように自然にやる", "相手に気づかれるようにやる", "自分のスタイルを変えない"], answer: 1, explanation: "ミラーリングは自然にやることが大切です。わざとらしいと逆効果になります。" },
            ]
        },

        // =============================================
        // Module 302: 共感と承認のスキル
        // =============================================
        {
            id: 302,
            title: "共感と承認のスキル",
            duration: "10分",
            content: `
<h2>💛 共感と承認のスキル</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>共感とは<strong>相手の気持ちを理解し、寄り添うこと</strong>です。同意する必要はありません。「あなたがそう感じるのは理解できる」と伝えることが共感です。</p>
</div>

<h3>🤔 共感 vs 同情 vs 同意</h3>

<div class="visual-box">
<div class="visual-box-title">3つの違い</div>
<div style="display:flex;flex-direction:column;gap:8px;padding:15px;max-width:550px;margin:0 auto;">
<div style="background:#E8F5E9;border-left:4px solid #4CAF50;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>共感</strong>：「あなたがそう感じるのは理解できます」<br>
<span style="font-size:0.85rem;color:#666;">→ 相手の気持ちを理解する（自分の意見は別）</span>
</div>
<div style="background:#FFF3E0;border-left:4px solid #E85D04;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>同情</strong>：「かわいそうに...」<br>
<span style="font-size:0.85rem;color:#666;">→ 上から目線になりやすい</span>
</div>
<div style="background:#E3F2FD;border-left:4px solid #1976D2;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>同意</strong>：「私もそう思います」<br>
<span style="font-size:0.85rem;color:#666;">→ 意見が一致（常にできるわけではない）</span>
</div>
</div>
</div>

<h3>👍 承認の4つのレベル</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>存在の承認</strong>
「今日来てくれてありがとう」「会えて嬉しいです」
→ その人がいること自体を認める
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>行動の承認</strong>
「毎日遅くまで頑張っていますね」「すぐに対応してくれたんですね」
→ 相手の行動を具体的に認める
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>成果の承認</strong>
「プレゼン大成功でしたね！」「目標達成おめでとうございます」
→ 結果を認める
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>成長の承認</strong>
「前と比べてすごく上達しましたね」「着実に成長していますね」
→ 変化・成長を認める（最も嬉しい承認）
</div>
</div>
</div>

<h3>💬 共感フレーズ集</h3>

<table>
<tr><th>相手の状態</th><th>共感フレーズ</th></tr>
<tr><td>嬉しいとき</td><td>「それは嬉しいですね！」「よかったですね！」</td></tr>
<tr><td>困っているとき</td><td>「それは困りますよね」「大変でしたね」</td></tr>
<tr><td>怒っているとき</td><td>「それは腹が立ちますよね」「悔しかったですね」</td></tr>
<tr><td>不安なとき</td><td>「心配になりますよね」「不安ですよね」</td></tr>
<tr><td>頑張ったとき</td><td>「よく頑張りましたね」「大変だったんですね」</td></tr>
</table>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li><strong>共感 ≠ 同意</strong>。意見が違っても共感はできる</li>
<li>承認は<strong>存在→行動→成果→成長</strong>の4レベル</li>
<li>相手の感情に合った<strong>共感フレーズ</strong>を使う</li>
</ul>
</div>
`,
            quiz: [
                { id: "q302_1", type: "choice", question: "共感と同意の違いとして正しいのはどれですか？", options: ["共感と同意は同じ意味", "共感は気持ちの理解、同意は意見の一致", "同意の方が深い関係を示す", "共感は必ず同意を含む"], answer: 1, explanation: "共感は「あなたがそう感じることを理解する」こと、同意は「自分も同じ意見だ」ということ。意見が違っても共感はできます。" },
                { id: "q302_2", type: "choice", question: "最も相手が嬉しいと感じる承認のレベルはどれですか？", options: ["存在の承認", "行動の承認", "成果の承認", "成長の承認"], answer: 3, explanation: "成長の承認（「前と比べて上達しましたね」）は、相手の変化や努力のプロセスを認めるため、最も嬉しい承認と言われます。" },
            ]
        },

        // =============================================
        // Module 303: 自己開示のバランス
        // =============================================
        {
            id: 303,
            title: "自己開示のバランス",
            duration: "10分",
            content: `
<h2>🪟 自己開示のバランス</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>自己開示とは<strong>自分のプライベートな情報や感情を相手に伝える</strong>こと。適切な自己開示は信頼を深めますが、やりすぎは逆効果です。</p>
</div>

<h3>🪟 ジョハリの窓</h3>

<div class="visual-box">
<div class="visual-box-title">自己認識の4つの領域</div>
<table style="width:100%;max-width:500px;margin:0 auto;border-collapse:collapse;">
<tr>
<td style="width:50%;background:#E8F5E9;border:2px solid #4CAF50;padding:20px;text-align:center;">
<div style="font-weight:700;">開放の窓</div>
<div style="font-size:0.8rem;color:#666;">自分も他人も知っている</div>
<div style="font-size:0.75rem;margin-top:4px;">→ ここを広げる！</div>
</td>
<td style="width:50%;background:#FFF3E0;border:2px solid #E85D04;padding:20px;text-align:center;">
<div style="font-weight:700;">盲点の窓</div>
<div style="font-size:0.8rem;color:#666;">他人は知っているが<br>自分は気づいていない</div>
</td>
</tr>
<tr>
<td style="background:#E3F2FD;border:2px solid #1976D2;padding:20px;text-align:center;">
<div style="font-weight:700;">秘密の窓</div>
<div style="font-size:0.8rem;color:#666;">自分は知っているが<br>他人には隠している</div>
</td>
<td style="background:#F3E5F5;border:2px solid #7B1FA2;padding:20px;text-align:center;">
<div style="font-weight:700;">未知の窓</div>
<div style="font-size:0.8rem;color:#666;">自分も他人も<br>知らない可能性</div>
</td>
</tr>
</table>
<p style="font-size:0.85rem;color:#666;margin-top:10px;">自己開示で「秘密の窓」を「開放の窓」に変えていく → 信頼が深まる</p>
</div>

<h3>📊 自己開示の深さレベル</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>表面的な情報（初対面向き）</strong>
出身地、仕事、趣味、好きな食べ物
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>考え・価値観（関係が少し深まったら）</strong>
「仕事で大事にしていること」「人生で影響を受けたこと」
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>感情・弱さ（信頼関係ができたら）</strong>
「実は苦手なんです」「あのとき辛かったんです」
</div>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">🔑 返報性の原理</div>
<p>人は<strong>自分が開示した分だけ、相手も開示してくれる</strong>傾向があります。まず自分から少し自己開示することで、相手も心を開きやすくなります。</p>
<p style="font-size:0.85rem;color:#888;">例：「実は私も転職したことがあって...」→ 相手も転職経験を話してくれる</p>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 自己開示の注意点</div>
<ul>
<li><strong>段階を飛ばさない</strong>：いきなり深い話をすると引かれる</li>
<li><strong>相手のペースに合わせる</strong>：相手が開示していないのに深い話をしない</li>
<li><strong>自慢にならないように</strong>：自己開示 ≠ 自慢話</li>
<li><strong>ネガティブすぎない</strong>：重すぎる話は初期段階では避ける</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>ジョハリの窓の<strong>「開放の窓」を広げる</strong>のが目標</li>
<li>自己開示は<strong>表面→価値観→感情</strong>と段階的に</li>
<li><strong>返報性の原理</strong>：まず自分から開示して心を開く</li>
</ul>
</div>
`,
            quiz: [
                { id: "q303_1", type: "choice", question: "ジョハリの窓で、自己開示によって広がるのはどの窓ですか？", options: ["盲点の窓", "開放の窓", "未知の窓", "秘密の窓"], answer: 1, explanation: "自己開示によって「秘密の窓」の内容が「開放の窓」に移り、開放の窓が広がります。" },
                { id: "q303_2", type: "choice", question: "自己開示で注意すべきことはどれですか？", options: ["できるだけ早く深い話をする", "相手より多く開示する", "段階を飛ばさず、相手のペースに合わせる", "自分の成功体験を中心に話す"], answer: 2, explanation: "自己開示は段階的に行い、相手のペースに合わせることが大切です。いきなり深い話をすると逆効果です。" },
            ]
        },

        // =============================================
        // Module 304: 非言語コミュニケーション
        // =============================================
        {
            id: 304,
            title: "非言語コミュニケーション応用",
            duration: "10分",
            content: `
<h2>🎭 非言語コミュニケーション応用</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>非言語コミュニケーションはコミュニケーション全体の<strong>65〜93%</strong>を占めると言われています。言葉の裏にある本当のメッセージを読み取りましょう。</p>
</div>

<h3>📏 パーソナルスペース（プロクセミクス）</h3>

<div class="visual-box">
<div class="visual-box-title">エドワード・ホールの対人距離理論</div>
<div style="display:flex;flex-direction:column;gap:8px;padding:15px;max-width:500px;margin:0 auto;">
<div style="background:#FFCDD2;border-left:4px solid #E53935;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>親密距離（0〜45cm）</strong>：恋人・家族
</div>
<div style="background:#FFF3E0;border-left:4px solid #E85D04;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>個体距離（45cm〜1.2m）</strong>：友人・親しい同僚
</div>
<div style="background:#E3F2FD;border-left:4px solid #1976D2;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>社会距離（1.2m〜3.5m）</strong>：ビジネス・初対面
</div>
<div style="background:#E8F5E9;border-left:4px solid #4CAF50;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>公衆距離（3.5m以上）</strong>：講演・スピーチ
</div>
</div>
</div>

<h3>🗣 パラ言語（声の要素）</h3>

<table>
<tr><th>要素</th><th>効果</th><th>注意点</th></tr>
<tr><td>声の大きさ</td><td>適度な大きさは自信の表れ</td><td>大きすぎると威圧的</td></tr>
<tr><td>話すスピード</td><td>ゆっくり→落ち着き、速い→情熱</td><td>相手に合わせるのが基本</td></tr>
<tr><td>声のトーン</td><td>高い→明るさ、低い→信頼感</td><td>単調にならないよう抑揚を</td></tr>
<tr><td>間（ま）</td><td>大事なことの前後に間を置く</td><td>沈黙を恐れない</td></tr>
</table>

<h3>🕵️ 相手の非言語サインを読む</h3>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #4CAF50;">
<h4 style="color:#4CAF50;">😊 興味・好意のサイン</h4>
<ul>
<li>体をこちらに向ける</li>
<li>前傾姿勢になる</li>
<li>頻繁にアイコンタクト</li>
<li>足のつま先がこちらを向く</li>
<li>うなずきが多い</li>
</ul>
</div>
<div class="compare-card" style="border-left:4px solid #EF4444;">
<h4 style="color:#EF4444;">😐 退屈・不快のサイン</h4>
<ul>
<li>体を後ろに引く</li>
<li>腕や足を組む</li>
<li>視線が泳ぐ・時計を見る</li>
<li>足のつま先が出口を向く</li>
<li>顔を触る（嘘・不安のサイン）</li>
</ul>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li><strong>パーソナルスペース</strong>を意識して距離感を保つ</li>
<li><strong>パラ言語</strong>（声のトーン・スピード・間）で印象が変わる</li>
<li>相手の<strong>非言語サイン</strong>を読んで会話のペースを調整する</li>
</ul>
</div>
`,
            quiz: [
                { id: "q304_1", type: "choice", question: "初対面のビジネスシーンで適切な対人距離はどれですか？", options: ["0〜45cm（親密距離）", "45cm〜1.2m（個体距離）", "1.2m〜3.5m（社会距離）", "3.5m以上（公衆距離）"], answer: 2, explanation: "初対面のビジネスシーンでは社会距離（1.2m〜3.5m）が適切です。近すぎると不快感を与えます。" },
                { id: "q304_2", type: "choice", question: "相手が退屈・不快を感じているサインはどれですか？", options: ["前傾姿勢になる", "頻繁にアイコンタクトする", "足のつま先が出口を向いている", "よくうなずく"], answer: 2, explanation: "足のつま先が出口を向いているのは、その場を離れたいという無意識のサインです。" },
            ]
        },
    ]
};
