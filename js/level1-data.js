/* ============================================
   コミュニケーションアカデミー - Level 1: 第一印象の科学
   ============================================ */

const LEVEL1_DATA = {
    id: 1,
    title: "第一印象の科学",
    icon: "🤝",
    description: "出会いの最初の数秒で決まる印象の科学を学ぶ",
    modules: [

        // =============================================
        // Module 101: 第一印象はなぜ重要か
        // =============================================
        {
            id: 101,
            title: "第一印象はなぜ重要か",
            duration: "10分",
            content: `
<h2>🤝 第一印象はなぜ重要か</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>人は出会ってわずか<strong>3〜7秒</strong>で相手の印象を形成します。そしてこの第一印象は、その後の関係性全体に大きな影響を与えます。</p>
</div>

<h3>⏱ 第一印象が決まるスピード</h3>

<div class="visual-box">
<div class="visual-box-title">図解：第一印象のタイムライン</div>
<div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap;padding:15px 0;">
<div style="background:#FFF3E0;border:2px solid #E85D04;border-radius:12px;padding:16px;text-align:center;min-width:120px;">
<div style="font-size:1.5rem;">⚡</div>
<div style="font-weight:700;font-size:0.9rem;">0.1秒</div>
<div style="font-size:0.8rem;color:#666;">顔の魅力度判断</div>
</div>
<div style="display:flex;align-items:center;font-size:1.5rem;">→</div>
<div style="background:#FFF3E0;border:2px solid #E85D04;border-radius:12px;padding:16px;text-align:center;min-width:120px;">
<div style="font-size:1.5rem;">👀</div>
<div style="font-weight:700;font-size:0.9rem;">3〜7秒</div>
<div style="font-size:0.8rem;color:#666;">全体の印象形成</div>
</div>
<div style="display:flex;align-items:center;font-size:1.5rem;">→</div>
<div style="background:#FFF3E0;border:2px solid #E85D04;border-radius:12px;padding:16px;text-align:center;min-width:120px;">
<div style="font-size:1.5rem;">🧠</div>
<div style="font-weight:700;font-size:0.9rem;">30秒〜2分</div>
<div style="font-size:0.8rem;color:#666;">印象の固定化</div>
</div>
</div>
</div>

<h3>🧪 心理学的な根拠</h3>

<div class="compare-grid">
<div class="compare-card">
<h4>📌 初頭効果</h4>
<p>最初に得た情報が、全体の印象を大きく左右します。</p>
<p style="font-size:0.85rem;color:#888;">例：最初に「明るい人だ」と感じると、その後の行動もポジティブに解釈されやすい</p>
</div>
<div class="compare-card">
<h4>📌 ハロー効果</h4>
<p>ある一つの良い特徴が、他の特徴の評価も引き上げます。</p>
<p style="font-size:0.85rem;color:#888;">例：笑顔が素敵な人は「仕事もできそう」「信頼できそう」と感じられやすい</p>
</div>
</div>

<h3>📊 メラビアンの法則</h3>

<div class="info-box formula">
<div class="info-box-title">🔬 メラビアンの法則（7-38-55ルール）</div>
<p>感情や態度が矛盾するメッセージを受けたとき、人は以下の割合で情報を重視します：</p>
</div>

<div class="visual-box">
<div class="visual-box-title">印象を決める3つの要素</div>
<div style="display:flex;justify-content:center;gap:20px;flex-wrap:wrap;padding:15px 0;">
<div style="background:#E3F2FD;border:2px solid #1976D2;border-radius:50%;width:120px;height:120px;display:flex;flex-direction:column;justify-content:center;align-items:center;">
<div style="font-size:1.8rem;font-weight:800;">55%</div>
<div style="font-size:0.75rem;font-weight:600;">視覚情報</div>
<div style="font-size:0.7rem;color:#666;">表情・見た目</div>
</div>
<div style="background:#FFF3E0;border:2px solid #E85D04;border-radius:50%;width:120px;height:120px;display:flex;flex-direction:column;justify-content:center;align-items:center;">
<div style="font-size:1.8rem;font-weight:800;">38%</div>
<div style="font-size:0.75rem;font-weight:600;">聴覚情報</div>
<div style="font-size:0.7rem;color:#666;">声のトーン</div>
</div>
<div style="background:#F3E5F5;border:2px solid #7B1FA2;border-radius:50%;width:120px;height:120px;display:flex;flex-direction:column;justify-content:center;align-items:center;">
<div style="font-size:1.8rem;font-weight:800;">7%</div>
<div style="font-size:0.75rem;font-weight:600;">言語情報</div>
<div style="font-size:0.7rem;color:#666;">話の内容</div>
</div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
<p>メラビアンの法則は「話の内容はどうでもいい」という意味ではありません。感情的なメッセージに矛盾がある場合の研究結果です。ただし、<strong>見た目や声のトーンが重要</strong>という示唆は日常でも活かせます。</p>
</div>

<h3>🔄 第一印象を変えるのは難しい</h3>

<p>一度形成された第一印象を覆すには、<strong>その8倍以上の情報量</strong>が必要だと言われています。だからこそ、最初の出会いを大切にする価値があるのです。</p>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>第一印象は<strong>3〜7秒</strong>で決まる</li>
<li><strong>初頭効果</strong>により、最初の印象がその後の評価を左右する</li>
<li>印象の55%は<strong>視覚情報</strong>（表情・見た目）で決まる</li>
<li>一度ついた印象を変えるのは非常に大変</li>
</ul>
</div>
`,
            quiz: [
                { id: "q101_1", type: "choice", question: "人が第一印象を形成するのにかかる時間はおよそどれくらいですか？", options: ["30分〜1時間", "5〜10分", "3〜7秒", "1日"], answer: 2, explanation: "研究によると、人は出会って3〜7秒で相手の第一印象を形成します。" },
                { id: "q101_2", type: "choice", question: "メラビアンの法則で、印象に最も大きな影響を与えるのはどれですか？", options: ["言語情報（話の内容）", "聴覚情報（声のトーン）", "視覚情報（表情・見た目）", "すべて等しい"], answer: 2, explanation: "メラビアンの法則では、視覚情報が55%を占め、最も大きな影響を与えます。" },
                { id: "q101_3", type: "choice", question: "最初に得た情報が全体の印象を大きく左右する心理現象を何と呼びますか？", options: ["ハロー効果", "初頭効果", "単純接触効果", "返報性の原理"], answer: 1, explanation: "初頭効果（Primacy Effect）とは、最初に得た情報が全体の印象形成に大きく影響する現象です。" },
            ]
        },

        // =============================================
        // Module 102: 見た目と身だしなみ
        // =============================================
        {
            id: 102,
            title: "見た目と身だしなみ",
            duration: "10分",
            content: `
<h2>👔 見た目と身だしなみ</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>身だしなみは「おしゃれ」とは違います。<strong>相手への敬意</strong>を形で表すことです。清潔感が何より大切です。</p>
</div>

<h3>🧹 清潔感チェックリスト</h3>

<div class="visual-box">
<div class="visual-box-title">身だしなみの基本5項目</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;padding:15px 0;">
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">💇</div>
<div style="font-weight:700;font-size:0.85rem;">髪</div>
<div style="font-size:0.75rem;color:#666;">清潔で整っている</div>
</div>
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">👕</div>
<div style="font-weight:700;font-size:0.85rem;">服装</div>
<div style="font-size:0.75rem;color:#666;">シワ・汚れなし</div>
</div>
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">👟</div>
<div style="font-weight:700;font-size:0.85rem;">靴</div>
<div style="font-size:0.75rem;color:#666;">磨かれている</div>
</div>
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">✋</div>
<div style="font-weight:700;font-size:0.85rem;">手・爪</div>
<div style="font-size:0.75rem;color:#666;">爪が整っている</div>
</div>
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">😊</div>
<div style="font-weight:700;font-size:0.85rem;">表情</div>
<div style="font-size:0.75rem;color:#666;">穏やかな笑顔</div>
</div>
</div>
</div>

<h3>👔 TPOに合わせた服装</h3>

<table>
<tr><th>シーン</th><th>服装の目安</th><th>注意点</th></tr>
<tr><td>ビジネス（初対面）</td><td>スーツ or ジャケット</td><td>相手より少しフォーマルに</td></tr>
<tr><td>カジュアルな集まり</td><td>きれいめカジュアル</td><td>清潔感を最優先に</td></tr>
<tr><td>オンライン会議</td><td>上半身はきちんと</td><td>背景・照明にも注意</td></tr>
</table>

<div class="info-box success">
<div class="info-box-title">✅ 実践ポイント</div>
<ul>
<li>迷ったら<strong>少しフォーマル寄り</strong>にする</li>
<li><strong>清潔感 > おしゃれ</strong>。シンプルで清潔が最強</li>
<li>香水は<strong>ほのかに</strong>。つけすぎは逆効果</li>
<li>鏡で全身チェックする習慣をつける</li>
</ul>
</div>
`,
            quiz: [
                { id: "q102_1", type: "choice", question: "初対面のビジネスシーンで服装に迷ったとき、どうすべきですか？", options: ["カジュアルにして親しみやすさを出す", "少しフォーマル寄りにする", "相手と同じレベルにする", "個性を出すようにする"], answer: 1, explanation: "初対面では少しフォーマル寄りにするのが安全です。後からカジュアルに崩すことはできても、最初の印象を上げるのは難しいからです。" },
                { id: "q102_2", type: "choice", question: "身だしなみで最も重要なのはどれですか？", options: ["ブランド品を身につける", "流行を取り入れる", "清潔感", "個性的であること"], answer: 2, explanation: "身だしなみで最も重要なのは清潔感です。どんなに高価な服でも、清潔感がなければ逆効果です。" },
            ]
        },

        // =============================================
        // Module 103: 表情と笑顔の力
        // =============================================
        {
            id: 103,
            title: "表情と笑顔の力",
            duration: "8分",
            content: `
<h2>😊 表情と笑顔の力</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>笑顔は<strong>万国共通のコミュニケーションツール</strong>です。自然な笑顔ひとつで、相手の警戒心を解き、安心感を与えることができます。</p>
</div>

<h3>😁 本物の笑顔 vs 作り笑い</h3>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #4CAF50;">
<h4 style="color:#4CAF50;">😊 デュシェンヌ・スマイル（本物の笑顔）</h4>
<ul>
<li>口角が上がる</li>
<li><strong>目尻にシワ</strong>（目が笑っている）</li>
<li>頬が持ち上がる</li>
<li>自然と長続きする</li>
</ul>
<p style="font-size:0.85rem;color:#888;">→ 信頼感・好感度が高い</p>
</div>
<div class="compare-card" style="border-left:4px solid #EF4444;">
<h4 style="color:#EF4444;">😬 作り笑い</h4>
<ul>
<li>口角だけが上がる</li>
<li><strong>目が笑っていない</strong></li>
<li>不自然に長いor短い</li>
<li>左右非対称になりがち</li>
</ul>
<p style="font-size:0.85rem;color:#888;">→ 不信感を与えることがある</p>
</div>
</div>

<h3>🏋️ 笑顔トレーニング</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>「ウイスキー」と言う</strong>
口角が自然に上がるフレーズです。鏡の前で繰り返してみましょう。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>目を細める練習</strong>
目尻を下げるように意識します。「嬉しいことを思い出す」と自然にできます。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>3秒キープ</strong>
笑顔を3秒間キープ。長すぎず短すぎない自然な長さです。
</div>
</div>
</div>

<h3>🎭 表情の使い分け</h3>

<table>
<tr><th>シーン</th><th>適切な表情</th><th>効果</th></tr>
<tr><td>初対面の挨拶</td><td>にこやかな笑顔</td><td>安心感を与える</td></tr>
<tr><td>相手の話を聴く</td><td>穏やかで共感的</td><td>「聴いてもらえている」感</td></tr>
<tr><td>真剣な話題</td><td>真剣で落ち着いた表情</td><td>誠実さ・信頼感</td></tr>
<tr><td>相手が嬉しい報告</td><td>一緒に喜ぶ笑顔</td><td>共感・絆の強化</td></tr>
</table>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>本物の笑顔は<strong>目が笑っている</strong>（デュシェンヌ・スマイル）</li>
<li>笑顔は練習で上達する。鏡の前で毎日トレーニング</li>
<li>シーンに合わせた<strong>表情の使い分け</strong>が大切</li>
</ul>
</div>
`,
            quiz: [
                { id: "q103_1", type: "choice", question: "本物の笑顔（デュシェンヌ・スマイル）の特徴はどれですか？", options: ["口角だけが上がる", "目尻にシワができ、目も笑っている", "左右非対称になる", "長時間維持される"], answer: 1, explanation: "デュシェンヌ・スマイルは口角が上がるだけでなく、目尻にシワができ目全体が笑っているのが特徴です。" },
                { id: "q103_2", type: "choice", question: "相手が真剣な悩みを話しているとき、最も適切な表情はどれですか？", options: ["笑顔で元気づける", "無表情で聴く", "真剣で落ち着いた共感的な表情", "驚いた表情"], answer: 2, explanation: "真剣な話題には、真剣で落ち着いた表情で聴くことが大切です。場にそぐわない笑顔は逆効果になります。" },
            ]
        },

        // =============================================
        // Module 104: 姿勢とボディランゲージ
        // =============================================
        {
            id: 104,
            title: "姿勢とボディランゲージ",
            duration: "10分",
            content: `
<h2>🧍 姿勢とボディランゲージ</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>体の使い方は<strong>言葉以上に多くを語ります</strong>。オープンな姿勢は「あなたを受け入れています」というメッセージです。</p>
</div>

<h3>🚫 NG vs ✅ OK ボディランゲージ</h3>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #EF4444;">
<h4 style="color:#EF4444;">🚫 クローズドボディランゲージ</h4>
<ul>
<li>腕を組む → 拒絶・防御</li>
<li>足を組んで体をそらす → 無関心</li>
<li>スマホをいじる → 「あなたに興味なし」</li>
<li>視線を合わせない → 不信感</li>
<li>猫背 → 自信のなさ</li>
</ul>
</div>
<div class="compare-card" style="border-left:4px solid #4CAF50;">
<h4 style="color:#4CAF50;">✅ オープンボディランゲージ</h4>
<ul>
<li>手を見せる → 誠実さ・開放感</li>
<li>相手に体を向ける → 関心・敬意</li>
<li>適度にうなずく → 「聴いています」</li>
<li>アイコンタクト → 信頼感</li>
<li>背筋を伸ばす → 自信・信頼性</li>
</ul>
</div>
</div>

<h3>👁 アイコンタクトの基本</h3>

<div class="visual-box">
<div class="visual-box-title">適切なアイコンタクトの時間配分</div>
<div style="display:flex;justify-content:center;gap:20px;flex-wrap:wrap;padding:15px 0;">
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:16px;text-align:center;min-width:140px;">
<div style="font-size:1.3rem;font-weight:800;">60〜70%</div>
<div style="font-size:0.85rem;font-weight:600;">話を聴くとき</div>
<div style="font-size:0.75rem;color:#666;">相手の目を見る割合</div>
</div>
<div style="background:#FFF3E0;border:2px solid #E85D04;border-radius:12px;padding:16px;text-align:center;min-width:140px;">
<div style="font-size:1.3rem;font-weight:800;">40〜50%</div>
<div style="font-size:0.85rem;font-weight:600;">話すとき</div>
<div style="font-size:0.75rem;color:#666;">相手の目を見る割合</div>
</div>
</div>
<p style="font-size:0.85rem;color:#666;margin-top:10px;">※ 1回のアイコンタクトは3〜5秒が自然。じっと見つめすぎると威圧感を与えます。</p>
</div>

<h3>🤝 握手のマナー（ビジネス）</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>立ち上がって近づく</strong>
座ったまま手を差し出すのはNG。相手と同じ高さで握手する。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>しっかり握る（適度な力で）</strong>
弱すぎ → 頼りない印象。強すぎ → 威圧的。中間が理想。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>アイコンタクト + 笑顔</strong>
握手しながら目を見て微笑む。2〜3回上下に振る。
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li><strong>オープンな姿勢</strong>（手を見せる・体を向ける）で受容のサインを送る</li>
<li>アイコンタクトは<strong>聴くとき60〜70%、話すとき40〜50%</strong>が目安</li>
<li>猫背・腕組み・スマホいじりは<strong>最悪の第一印象</strong>を作る</li>
</ul>
</div>
`,
            quiz: [
                { id: "q104_1", type: "choice", question: "相手の話を聴いているとき、アイコンタクトの割合はどれくらいが適切ですか？", options: ["100%（ずっと見る）", "60〜70%", "20〜30%", "0%（見ない方が良い）"], answer: 1, explanation: "話を聴くときは60〜70%の割合でアイコンタクトをとるのが自然です。100%だと威圧感、少なすぎると無関心に見えます。" },
                { id: "q104_2", type: "choice", question: "初対面で避けるべきボディランゲージはどれですか？", options: ["適度にうなずく", "相手に体を向ける", "腕を組んで話を聴く", "手を見せる"], answer: 2, explanation: "腕を組むのはクローズドボディランゲージの代表例で、拒絶や防御のサインと受け取られやすいです。" },
            ]
        },
    ]
};
