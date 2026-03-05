/* ============================================
   コミュニケーションアカデミー - Level 5: 実践シーン別テクニック
   ============================================ */

const LEVEL5_DATA = {
    id: 5,
    title: "実践シーン別テクニック",
    icon: "🎯",
    description: "ビジネス・プライベート・オンラインの場面別スキル",
    modules: [

        // =============================================
        // Module 501: ビジネスでの人脈構築
        // =============================================
        {
            id: 501,
            title: "ビジネスでの人脈構築",
            duration: "12分",
            content: `
<h2>💼 ビジネスでの人脈構築</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>ビジネスの人脈は<strong>「何を知っているか」よりも「誰を知っているか」</strong>が重要になる場面が多くあります。質の高いネットワーキングスキルを身につけましょう。</p>
</div>

<h3>🤝 ネットワーキングイベントの攻略法</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>事前準備</strong>
参加者リストを確認し、話したい人を2〜3人ピックアップ。自己紹介を練習しておく。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>入りやすい人を見つける</strong>
一人でいる人や、2人以上のオープンなグループ（円になっていない）に声をかける。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>「与える」姿勢で臨む</strong>
「何かもらおう」ではなく「相手に何を提供できるか」を考える。情報・人の紹介・知識など。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>会話の切り上げ方</strong>
「他の方ともお話ししたいので、また改めてお話しさせてください。連絡先を交換させていただけますか？」
</div>
</div>
</div>

<h3>📇 名刺交換のマナー</h3>

<table>
<tr><th>ステップ</th><th>ポイント</th></tr>
<tr><td>渡すとき</td><td>両手で、相手に文字が読める向きで差し出す</td></tr>
<tr><td>受け取るとき</td><td>両手で受け取り「頂戴いたします」と言う</td></tr>
<tr><td>受け取った後</td><td>名前を確認し「〇〇さんですね」と復唱する</td></tr>
<tr><td>着席時</td><td>テーブルの上に名刺入れの上に置く</td></tr>
</table>

<h3>🎯 「ギバー」になる</h3>

<div class="info-box formula">
<div class="info-box-title">🔑 アダム・グラントの「GIVE & TAKE」</div>
<p>人間関係には3つのタイプがあります：</p>
<ul>
<li><strong>ギバー（与える人）</strong>：見返りを求めず、相手に価値を提供する → 長期的に最も成功する</li>
<li><strong>テイカー（受け取る人）</strong>：自分の利益を最優先する → 短期的には得するが信頼を失う</li>
<li><strong>マッチャー（バランスをとる人）</strong>：もらった分だけ返す → 無難だが差別化しにくい</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>ネットワーキングは<strong>事前準備</strong>が成功の鍵</li>
<li><strong>「与える」姿勢（ギバー）</strong>で臨む</li>
<li>名刺交換は<strong>名前を復唱</strong>して覚える</li>
<li>会話の<strong>切り上げ方</strong>もスキルの一つ</li>
</ul>
</div>
`,
            quiz: [
                { id: "q501_1", type: "choice", question: "ネットワーキングイベントで最も大切な姿勢はどれですか？", options: ["できるだけ多くの人と名刺交換する", "自分をアピールする", "相手に何を提供できるかを考える（ギバーの姿勢）", "有名人とだけ話す"], answer: 2, explanation: "「与える」姿勢（ギバー）で臨むことが長期的な信頼と人脈構築につながります。" },
                { id: "q501_2", type: "choice", question: "名刺を受け取った後にすべきことはどれですか？", options: ["すぐにポケットにしまう", "裏面にメモを書く", "名前を確認して復唱する", "自分の名刺と比較する"], answer: 2, explanation: "名前を確認して「〇〇さんですね」と復唱することで、相手への敬意と名前を覚える姿勢を示せます。" },
            ]
        },

        // =============================================
        // Module 502: プライベートでの友人関係
        // =============================================
        {
            id: 502,
            title: "プライベートでの友人関係",
            duration: "10分",
            content: `
<h2>👥 プライベートでの友人関係</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>大人になってからの友人作りは難しいと言われますが、<strong>3つの条件</strong>を意識すれば自然と友情が育まれます。</p>
</div>

<h3>🔬 友情が生まれる3つの条件</h3>

<div class="visual-box">
<div class="visual-box-title">社会学者レベッカ・アダムスの研究</div>
<div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;padding:15px 0;">
<div style="background:#E3F2FD;border:2px solid #1976D2;border-radius:12px;padding:20px;text-align:center;min-width:150px;">
<div style="font-size:2rem;">📍</div>
<div style="font-weight:700;font-size:1rem;">近接性</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">物理的に近い<br>環境にいること</div>
</div>
<div style="background:#FFF3E0;border:2px solid #E85D04;border-radius:12px;padding:20px;text-align:center;min-width:150px;">
<div style="font-size:2rem;">🔄</div>
<div style="font-weight:700;font-size:1rem;">反復接触</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">定期的に<br>顔を合わせること</div>
</div>
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:20px;text-align:center;min-width:150px;">
<div style="font-size:2rem;">🛡</div>
<div style="font-weight:700;font-size:1rem;">心理的安全性</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">素の自分を<br>見せられること</div>
</div>
</div>
</div>

<h3>🏃 出会いの場を作る</h3>

<table>
<tr><th>方法</th><th>メリット</th><th>ポイント</th></tr>
<tr><td>趣味のコミュニティ</td><td>共通の話題がある</td><td>定期的に参加し続ける</td></tr>
<tr><td>ボランティア活動</td><td>価値観が近い人と出会える</td><td>活動を通じて自然に仲良く</td></tr>
<tr><td>習い事・スクール</td><td>定期的に顔を合わせる</td><td>同じ目標を持つ仲間意識</td></tr>
<tr><td>既存の友人からの紹介</td><td>共通の知人がいて安心</td><td>紹介者への感謝を忘れない</td></tr>
</table>

<h3>🌱 友情を育てるコツ</h3>

<div class="info-box formula">
<div class="info-box-title">🔑 「弱い紐帯の強さ」理論</div>
<p>社会学者グラノヴェッターの研究によると、<strong>親しい友人（強い紐帯）よりも、知り合い程度の関係（弱い紐帯）</strong>の方が、新しい情報や機会をもたらすことが多いとされています。幅広い関係を大切にしましょう。</p>
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>自分から誘う</strong>
「誰か誘ってくれないかな」と待つのではなく、自分から「今度〇〇しませんか？」と声をかける。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>小さな約束を守る</strong>
「今度あの映画見に行こう」と言ったら、本当に計画する。約束を守る人は信頼される。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>相手の大切な日を覚える</strong>
誕生日や大事なイベントを覚えておき、メッセージを送る。
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>友情には<strong>近接性・反復接触・心理的安全性</strong>が必要</li>
<li><strong>自分から誘う</strong>のが友人作りの第一歩</li>
<li><strong>弱い紐帯</strong>（知り合いレベルの関係）も大切にする</li>
</ul>
</div>
`,
            quiz: [
                { id: "q502_1", type: "choice", question: "友情が生まれるための3条件に含まれないのはどれですか？", options: ["近接性（物理的に近いこと）", "反復接触（定期的に会うこと）", "経済的な類似性（収入が近いこと）", "心理的安全性（素の自分を見せられること）"], answer: 2, explanation: "友情の3条件は近接性・反復接触・心理的安全性です。経済的な類似性は必須条件ではありません。" },
                { id: "q502_2", type: "choice", question: "「弱い紐帯の強さ」理論の内容として正しいのはどれですか？", options: ["親友が最も重要", "知り合い程度の関係が新しい情報や機会をもたらしやすい", "関係が弱いほど信頼できる", "友人は少ない方が良い"], answer: 1, explanation: "弱い紐帯（知り合い程度の関係）は、自分の親しい仲間とは異なる情報やネットワークを持っているため、新しい機会をもたらしやすいという理論です。" },
            ]
        },

        // =============================================
        // Module 503: オンラインコミュニケーション
        // =============================================
        {
            id: 503,
            title: "オンラインコミュニケーション",
            duration: "10分",
            content: `
<h2>💻 オンラインコミュニケーション</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>オンラインでは非言語情報が制限されるため、<strong>意識的に工夫</strong>しないと誤解が生まれやすくなります。</p>
</div>

<h3>📹 ビデオ通話のコツ</h3>

<div class="visual-box">
<div class="visual-box-title">オンラインミーティングの5つの基本</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;padding:15px 0;">
<div style="background:#E3F2FD;border:2px solid #1976D2;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">📷</div>
<div style="font-weight:700;font-size:0.85rem;">カメラ目線</div>
<div style="font-size:0.75rem;color:#666;">レンズを見る<br>=アイコンタクト</div>
</div>
<div style="background:#FFF3E0;border:2px solid #E85D04;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">💡</div>
<div style="font-weight:700;font-size:0.85rem;">照明</div>
<div style="font-size:0.75rem;color:#666;">顔の正面から<br>光を当てる</div>
</div>
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">🖼</div>
<div style="font-weight:700;font-size:0.85rem;">背景</div>
<div style="font-size:0.75rem;color:#666;">整頓された<br>シンプルな背景</div>
</div>
<div style="background:#F3E5F5;border:2px solid #7B1FA2;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">🎤</div>
<div style="font-weight:700;font-size:0.85rem;">音声</div>
<div style="font-size:0.75rem;color:#666;">イヤホンマイク<br>を使う</div>
</div>
<div style="background:#FFCDD2;border:2px solid #E53935;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">👋</div>
<div style="font-weight:700;font-size:0.85rem;">リアクション</div>
<div style="font-size:0.75rem;color:#666;">大きめの<br>うなずき・笑顔</div>
</div>
</div>
</div>

<h3>💬 テキストコミュニケーションの注意点</h3>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #EF4444;">
<h4 style="color:#EF4444;">❌ 誤解を生みやすい文</h4>
<ul>
<li>「了解。」（冷たく感じる）</li>
<li>「。」で終わる短文の連続</li>
<li>感情が読めない事務的な文</li>
<li>長文すぎて要点が不明</li>
</ul>
</div>
<div class="compare-card" style="border-left:4px solid #4CAF50;">
<h4 style="color:#4CAF50;">✅ 好印象な文</h4>
<ul>
<li>「了解しました！ありがとうございます」</li>
<li>適度に「！」や絵文字を使う</li>
<li>感謝や配慮の言葉を添える</li>
<li>簡潔だが温かみのある文</li>
</ul>
</div>
</div>

<h3>📱 SNSでの関係構築</h3>

<div class="info-box formula">
<div class="info-box-title">🔑 SNSコミュニケーションの3原則</div>
<ul>
<li><strong>リアクションは積極的に</strong>：いいね・コメントで存在感を示す</li>
<li><strong>ポジティブな発信</strong>：愚痴や批判ばかりでは人が離れる</li>
<li><strong>プライベートとパブリックの使い分け</strong>：DMと公開投稿を適切に分ける</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>ビデオ通話では<strong>カメラ目線・照明・リアクション</strong>を意識</li>
<li>テキストは<strong>温かみ</strong>を意識して書く</li>
<li>SNSは<strong>積極的なリアクション</strong>で関係を維持</li>
</ul>
</div>
`,
            quiz: [
                { id: "q503_1", type: "choice", question: "ビデオ通話でアイコンタクトの代わりになるのはどれですか？", options: ["画面上の相手の顔を見る", "カメラのレンズを見る", "キーボードを見る", "自分の映像を見る"], answer: 1, explanation: "カメラのレンズを見ることで、相手の画面上ではアイコンタクトをしているように見えます。" },
                { id: "q503_2", type: "choice", question: "テキストコミュニケーションで誤解を減らすコツはどれですか？", options: ["できるだけ短い文にする", "絵文字は一切使わない", "感謝や配慮の言葉を添える", "必ず敬語を使う"], answer: 2, explanation: "テキストでは非言語情報が伝わらないため、感謝や配慮の言葉を意識的に添えることで温かみが伝わります。" },
            ]
        },

        // =============================================
        // Module 504: 多様な相手との関わり方
        // =============================================
        {
            id: 504,
            title: "多様な相手との関わり方",
            duration: "10分",
            content: `
<h2>🌍 多様な相手との関わり方</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>世代・文化・性格が違う人との関わりは、<strong>「正解は一つではない」</strong>という柔軟な姿勢が大切です。</p>
</div>

<h3>🧠 性格タイプ別のコミュニケーション</h3>

<div class="visual-box">
<div class="visual-box-title">4つのソーシャルスタイル</div>
<table style="width:100%;max-width:550px;margin:0 auto;border-collapse:collapse;">
<tr>
<td style="width:50%;background:#FFCDD2;border:2px solid #E53935;padding:16px;text-align:center;">
<div style="font-weight:700;font-size:1rem;">ドライバー型</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">結論重視・効率的</div>
<div style="font-size:0.75rem;margin-top:8px;">→ 結論から話す<br>データで裏付ける</div>
</td>
<td style="width:50%;background:#FFF3E0;border:2px solid #E85D04;padding:16px;text-align:center;">
<div style="font-weight:700;font-size:1rem;">エクスプレッシブ型</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">感情豊か・社交的</div>
<div style="font-size:0.75rem;margin-top:8px;">→ 熱意を持って話す<br>ビジョンを共有する</div>
</td>
</tr>
<tr>
<td style="background:#E3F2FD;border:2px solid #1976D2;padding:16px;text-align:center;">
<div style="font-weight:700;font-size:1rem;">アナリティカル型</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">論理的・慎重</div>
<div style="font-size:0.75rem;margin-top:8px;">→ 詳しいデータを提供<br>考える時間を与える</div>
</td>
<td style="background:#E8F5E9;border:2px solid #4CAF50;padding:16px;text-align:center;">
<div style="font-weight:700;font-size:1rem;">エミアブル型</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">穏やか・協調的</div>
<div style="font-size:0.75rem;margin-top:8px;">→ 安心感を与える<br>ゆっくりペースで</div>
</td>
</tr>
</table>
</div>

<h3>🌐 異文化コミュニケーションの基本</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>先入観を持たない</strong>
文化の違いを「間違い」ではなく「違い」として受け入れる。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>ハイコンテクスト vs ローコンテクスト</strong>
日本は「察する」文化（ハイコンテクスト）。欧米は「言葉にする」文化（ローコンテクスト）。相手に合わせて表現を調整する。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>わからないことは素直に聞く</strong>
「教えてください」は恥ずかしいことではなく、相手への敬意。
</div>
</div>
</div>

<h3>👴👶 世代間コミュニケーション</h3>

<table>
<tr><th>世代</th><th>特徴</th><th>コミュニケーションのコツ</th></tr>
<tr><td>年上の方</td><td>経験値が高い・敬意を重視</td><td>敬語を使い、教えを請う姿勢で</td></tr>
<tr><td>同世代</td><td>共通体験が多い</td><td>共感ベースで関係を深める</td></tr>
<tr><td>年下の方</td><td>新しい感覚・スピード感</td><td>上から目線にならず、対等に接する</td></tr>
</table>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li><strong>ソーシャルスタイル</strong>を見極めて対応を変える</li>
<li>異文化では<strong>違いを尊重</strong>し、わからないことは聞く</li>
<li>世代が違っても<strong>相互尊重</strong>が基本</li>
</ul>
</div>
`,
            quiz: [
                { id: "q504_1", type: "choice", question: "結論重視で効率を求めるタイプへの対応として適切なのはどれですか？", options: ["雑談から入る", "結論から話し、データで裏付ける", "ゆっくり時間をかけて説明する", "感情に訴える"], answer: 1, explanation: "ドライバー型は結論と効率を重視するため、結論から話してデータで裏付けるのが効果的です。" },
                { id: "q504_2", type: "choice", question: "日本のコミュニケーション文化は一般的にどちらですか？", options: ["ローコンテクスト（言葉で明確に伝える）", "ハイコンテクスト（空気を読む・察する）", "どちらでもない", "状況による"], answer: 1, explanation: "日本は一般的にハイコンテクスト文化で、言葉にしなくても「察する」ことが重要視されます。" },
            ]
        },
    ]
};
