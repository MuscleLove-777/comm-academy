/* ============================================
   コミュニケーションアカデミー - Level 4: 関係を深める
   ============================================ */

const LEVEL4_DATA = {
    id: 4,
    title: "関係を深める",
    icon: "💎",
    description: "初対面から一歩先へ、関係を育てるスキル",
    modules: [

        // =============================================
        // Module 401: フォローアップの技術
        // =============================================
        {
            id: 401,
            title: "フォローアップの技術",
            duration: "10分",
            content: `
<h2>📱 フォローアップの技術</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>出会いで終わりではなく、<strong>その後のフォローアップ</strong>が関係を深める鍵です。「また会いたい」と思わせる人は、フォローが上手い人です。</p>
</div>

<h3>⏰ フォローアップのタイミング</h3>

<div class="visual-box">
<div class="visual-box-title">黄金のタイムライン</div>
<div style="display:flex;flex-direction:column;gap:8px;padding:15px;max-width:500px;margin:0 auto;">
<div style="background:#E8F5E9;border-left:4px solid #4CAF50;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>24時間以内</strong>：お礼のメッセージを送る<br>
<span style="font-size:0.85rem;color:#666;">「今日はありがとうございました。〇〇の話、とても面白かったです」</span>
</div>
<div style="background:#FFF3E0;border-left:4px solid #E85D04;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>1週間以内</strong>：会話で出た話題に関連する情報を共有<br>
<span style="font-size:0.85rem;color:#666;">「先日話題に出た本、読んでみました！」</span>
</div>
<div style="background:#E3F2FD;border-left:4px solid #1976D2;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>1ヶ月以内</strong>：次に会う機会を作る<br>
<span style="font-size:0.85rem;color:#666;">「今度ランチでもいかがですか？」</span>
</div>
</div>
</div>

<h3>💬 効果的なフォローアップメッセージ</h3>

<div class="scenario-box">
<div class="scenario-box-title">📝 メッセージのフレームワーク</div>
<p class="bad">❌ 悪い例：「先日はありがとうございました。」（テンプレ感）</p>
<p class="good">✅ 良い例：「田中さん、先日の交流会ではありがとうございました！京都旅行のお話、とても楽しかったです。おすすめの紅葉スポット、来年ぜひ行ってみたいと思います。またぜひお話しできれば嬉しいです！」</p>
</div>

<div class="info-box formula">
<div class="info-box-title">🔑 パーソナルなフォローのコツ</div>
<ul>
<li><strong>名前を入れる</strong>：テンプレ感をなくす</li>
<li><strong>具体的な話題に触れる</strong>：「覚えている」ことを伝える</li>
<li><strong>次のアクションを示す</strong>：「また会いたい」を伝える</li>
<li><strong>相手に役立つ情報を添える</strong>：記事のリンクやおすすめ情報</li>
</ul>
</div>

<h3>🔄 単純接触効果を活用する</h3>

<p><strong>単純接触効果</strong>とは、繰り返し接触するだけで好意度が増す心理現象です。頻繁すぎないペースで、定期的に接点を持つことが大切です。</p>

<table>
<tr><th>方法</th><th>頻度の目安</th><th>例</th></tr>
<tr><td>SNSでのリアクション</td><td>週1〜2回</td><td>投稿にいいね・コメント</td></tr>
<tr><td>メッセージ</td><td>月1〜2回</td><td>相手に関連する情報を共有</td></tr>
<tr><td>直接会う</td><td>月1回〜</td><td>ランチ・勉強会・イベント</td></tr>
</table>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li><strong>24時間以内</strong>にお礼メッセージを送る</li>
<li>メッセージには<strong>具体的な話題</strong>を入れる</li>
<li><strong>単純接触効果</strong>で定期的に接点を持ち続ける</li>
</ul>
</div>
`,
            quiz: [
                { id: "q401_1", type: "choice", question: "初対面の後、お礼のメッセージを送るベストタイミングはいつですか？", options: ["1時間以内", "24時間以内", "1週間以内", "1ヶ月以内"], answer: 1, explanation: "お礼のメッセージは24時間以内が理想です。早すぎると急かしている印象、遅すぎると忘れている印象になります。" },
                { id: "q401_2", type: "choice", question: "繰り返し接触することで好意度が増す心理現象を何と呼びますか？", options: ["ハロー効果", "返報性の原理", "単純接触効果", "初頭効果"], answer: 2, explanation: "単純接触効果（ザイアンスの法則）は、接触回数が増えるほど好意度が高まるという心理現象です。" },
            ]
        },

        // =============================================
        // Module 402: 感謝と褒め方
        // =============================================
        {
            id: 402,
            title: "感謝と褒め方の技術",
            duration: "10分",
            content: `
<h2>🌟 感謝と褒め方の技術</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>人は<strong>認められたい・感謝されたい</strong>という根源的な欲求を持っています。効果的な感謝と褒め方は、関係を大きく深めます。</p>
</div>

<h3>🎯 効果的な褒め方のルール</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>具体的に褒める</strong>
❌「すごいですね」→ ✅「プレゼンの冒頭のデータの見せ方が分かりやすかったです」
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>プロセスを褒める</strong>
❌「結果が良かったですね」→ ✅「コツコツ準備されていたのを見ていたので、この結果は当然ですね」
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>間接的に褒める</strong>
「〇〇さんがあなたのことを褒めていましたよ」（第三者経由の褒めは効果大）
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>影響を伝える</strong>
「〇〇さんの言葉のおかげで、私も頑張ろうと思えました」
</div>
</div>
</div>

<h3>❌ NGな褒め方</h3>

<div class="info-box danger">
<div class="info-box-title">⛔ 避けるべき褒め方</div>
<ul>
<li><strong>上から目線</strong>：「よくできたね」（目上の人に使うとNG）</li>
<li><strong>比較で褒める</strong>：「〇〇さんより上手いですね」（第三者を下げている）</li>
<li><strong>嘘くさい褒め</strong>：初対面で「尊敬します！」（軽く聞こえる）</li>
<li><strong>容姿だけ褒める</strong>：行動や内面を褒める方が深い信頼につながる</li>
</ul>
</div>

<h3>🙏 感謝の伝え方</h3>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #EF4444;">
<h4 style="color:#EF4444;">❌ 表面的な感謝</h4>
<p>「ありがとうございます」</p>
<p style="font-size:0.85rem;color:#888;">（何に感謝しているかわからない）</p>
</div>
<div class="compare-card" style="border-left:4px solid #4CAF50;">
<h4 style="color:#4CAF50;">✅ 深い感謝</h4>
<p>「急なお願いにもかかわらず、すぐに対応していただいて本当にありがとうございます。おかげで〇〇がうまくいきました」</p>
<p style="font-size:0.85rem;color:#888;">（何を・なぜ感謝しているか明確）</p>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>褒めるときは<strong>具体的に・プロセスを</strong>褒める</li>
<li><strong>間接的な褒め</strong>（第三者経由）は効果が高い</li>
<li>感謝は<strong>何に対して・なぜ</strong>を明確に伝える</li>
</ul>
</div>
`,
            quiz: [
                { id: "q402_1", type: "choice", question: "最も効果的な褒め方はどれですか？", options: ["「すごいですね！」と大げさに褒める", "「〇〇さんより上手いですね」と比較で褒める", "「プレゼンの冒頭のデータの見せ方が分かりやすかったです」と具体的に褒める", "「尊敬します」と最上級の言葉で褒める"], answer: 2, explanation: "具体的にどこが良かったかを褒めることで、本当に見てくれているという信頼感が生まれます。" },
                { id: "q402_2", type: "choice", question: "感謝の伝え方で大切なことは何ですか？", options: ["できるだけ短く伝える", "何に対して、なぜ感謝しているかを具体的に伝える", "毎回同じフレーズを使う", "メールだけで伝える"], answer: 1, explanation: "「何に感謝しているか」「それによってどう助かったか」を具体的に伝えることで、深い感謝が伝わります。" },
            ]
        },

        // =============================================
        // Module 403: 上手な断り方と境界線
        // =============================================
        {
            id: 403,
            title: "上手な断り方と境界線",
            duration: "10分",
            content: `
<h2>🛑 上手な断り方と境界線</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>良い人間関係には<strong>適切な境界線（バウンダリー）</strong>が必要です。相手を傷つけずに断るスキルは、長期的な関係を守ります。</p>
</div>

<h3>🗣 アサーティブな断り方</h3>

<p>アサーション（自他尊重の自己主張）には3つのスタイルがあります：</p>

<div class="visual-box">
<div class="visual-box-title">3つのコミュニケーションスタイル</div>
<div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;padding:15px 0;">
<div style="background:#FFCDD2;border:2px solid #E53935;border-radius:12px;padding:16px;text-align:center;min-width:150px;">
<div style="font-size:1.5rem;">😤</div>
<div style="font-weight:700;">攻撃的</div>
<div style="font-size:0.8rem;color:#666;">自分の主張を<br>押し通す</div>
</div>
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:16px;text-align:center;min-width:150px;">
<div style="font-size:1.5rem;">😊</div>
<div style="font-weight:700;">アサーティブ</div>
<div style="font-size:0.8rem;color:#666;">自分も相手も<br>尊重する</div>
</div>
<div style="background:#E3F2FD;border:2px solid #1976D2;border-radius:12px;padding:16px;text-align:center;min-width:150px;">
<div style="font-size:1.5rem;">😔</div>
<div style="font-weight:700;">受動的</div>
<div style="font-size:0.8rem;color:#666;">自分を抑えて<br>相手に合わせる</div>
</div>
</div>
</div>

<h3>📝 断り方のフレームワーク「DESC法」</h3>

<div class="steps">
<div class="step">
<div class="step-num">D</div>
<div class="step-content">
<strong>Describe（描写）</strong>：状況を客観的に述べる
「今週は既に予定が詰まっていまして...」
</div>
</div>
<div class="step">
<div class="step-num">E</div>
<div class="step-content">
<strong>Express（表現）</strong>：自分の気持ちを伝える
「お誘いいただいてとても嬉しいのですが...」
</div>
</div>
<div class="step">
<div class="step-num">S</div>
<div class="step-content">
<strong>Specify（提案）</strong>：代替案を提示する
「来週でしたらお時間作れるのですが、いかがですか？」
</div>
</div>
<div class="step">
<div class="step-num">C</div>
<div class="step-content">
<strong>Consequences（結果）</strong>：結果を伝える
「来週なら、もっとゆっくりお話しできると思います」
</div>
</div>
</div>

<h3>💬 「Iメッセージ」で伝える</h3>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #EF4444;">
<h4 style="color:#EF4444;">YOUメッセージ</h4>
<p>「あなたはいつも急に誘うから困る」</p>
<p style="font-size:0.85rem;color:#888;">→ 相手を責める印象</p>
</div>
<div class="compare-card" style="border-left:4px solid #4CAF50;">
<h4 style="color:#4CAF50;">Iメッセージ</h4>
<p>「私は、急な予定変更だと対応しきれなくて困ってしまうんです」</p>
<p style="font-size:0.85rem;color:#888;">→ 自分の気持ちとして伝える</p>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li><strong>アサーティブ</strong>なスタイルで自分も相手も尊重する</li>
<li><strong>DESC法</strong>で断りのフレームワークを使う</li>
<li><strong>Iメッセージ</strong>で自分の気持ちとして伝える</li>
</ul>
</div>
`,
            quiz: [
                { id: "q403_1", type: "choice", question: "アサーティブなコミュニケーションの特徴はどれですか？", options: ["自分の主張を押し通す", "相手に合わせて我慢する", "自分も相手も尊重する", "できるだけ関わらない"], answer: 2, explanation: "アサーティブとは自分の気持ちも相手の気持ちも大切にする自己主張のスタイルです。" },
                { id: "q403_2", type: "choice", question: "Iメッセージの正しい使い方はどれですか？", options: ["「あなたが悪い」と直接伝える", "「私は〇〇と感じる」と自分を主語にして伝える", "「みんなが困っている」と集団を主語にする", "「普通は〇〇だ」と一般論で伝える"], answer: 1, explanation: "Iメッセージは「私は〜と感じる」と自分を主語にすることで、相手を責めずに気持ちを伝える方法です。" },
            ]
        },

        // =============================================
        // Module 404: コンフリクト対処法
        // =============================================
        {
            id: 404,
            title: "コンフリクト対処法",
            duration: "12分",
            content: `
<h2>⚡ コンフリクト対処法</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>コンフリクト（意見の衝突）は人間関係において<strong>避けられないもの</strong>です。大切なのは「衝突しないこと」ではなく、<strong>「建設的に解決すること」</strong>です。</p>
</div>

<h3>🗺 コンフリクトの5つの対処スタイル</h3>

<div class="visual-box">
<div class="visual-box-title">トーマス・キルマンモデル</div>
<table style="width:100%;border-collapse:collapse;">
<tr><th>スタイル</th><th>自分の主張</th><th>相手への配慮</th><th>いつ使う？</th></tr>
<tr><td style="font-weight:700;color:#E53935;">競争</td><td>高い</td><td>低い</td><td>緊急時・安全に関わる場面</td></tr>
<tr><td style="font-weight:700;color:#4CAF50;">協調</td><td>高い</td><td>高い</td><td>Win-Winを目指せるとき</td></tr>
<tr><td style="font-weight:700;color:#1976D2;">妥協</td><td>中間</td><td>中間</td><td>時間が限られているとき</td></tr>
<tr><td style="font-weight:700;color:#7B1FA2;">回避</td><td>低い</td><td>低い</td><td>冷静になる時間が必要なとき</td></tr>
<tr><td style="font-weight:700;color:#E85D04;">適応</td><td>低い</td><td>高い</td><td>関係維持が最優先のとき</td></tr>
</table>
</div>

<h3>🤝 建設的な対話のステップ</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>感情を落ち着ける</strong>
怒りや不満を感じたら、まず深呼吸。「6秒ルール」— 怒りのピークは6秒で過ぎる。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>事実と感情を分ける</strong>
「あなたがミーティングに遅刻した」（事実）と「私はないがしろにされたと感じた」（感情）を分けて伝える。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>相手の立場を理解する</strong>
「あなたの考えを聞かせてください」と、相手にも発言の機会を与える。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>共通のゴールを確認する</strong>
「お互いにとって良い方法を一緒に考えましょう」
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>解決策を一緒に考える</strong>
どちらかが妥協するのではなく、第三の選択肢を探す。
</div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ コンフリクト時に避けるべきこと</div>
<ul>
<li><strong>人格攻撃</strong>：「あなたはいつも〜」「あなたって〇〇な人だよね」</li>
<li><strong>過去の持ち出し</strong>：「前もそうだったじゃない」</li>
<li><strong>無視・冷戦</strong>：問題を放置すると悪化する</li>
<li><strong>感情的な爆発</strong>：怒りのままに発言すると取り返しがつかない</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>コンフリクトは避けるものではなく<strong>建設的に解決</strong>するもの</li>
<li><strong>6秒ルール</strong>で感情を落ち着けてから対話する</li>
<li><strong>事実と感情を分けて</strong>伝える</li>
<li>人格攻撃・過去の持ち出しは絶対NG</li>
</ul>
</div>
`,
            quiz: [
                { id: "q404_1", type: "choice", question: "怒りのピークが過ぎるまでにかかると言われている時間はどれくらいですか？", options: ["1秒", "6秒", "1分", "10分"], answer: 1, explanation: "怒りのピークは約6秒で過ぎると言われています。この6秒を深呼吸などで乗り越えれば、冷静に対話できます。" },
                { id: "q404_2", type: "choice", question: "コンフリクト対処で、お互いにWin-Winを目指すスタイルはどれですか？", options: ["競争", "回避", "協調", "適応"], answer: 2, explanation: "協調スタイルは自分の主張も相手への配慮も高く、Win-Winの解決を目指すスタイルです。" },
            ]
        },
    ]
};
