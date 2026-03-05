/* ============================================
   コミュニケーションアカデミー - Level 6: コミュニケーションマスター
   ============================================ */

const LEVEL6_DATA = {
    id: 6,
    title: "コミュニケーションマスター",
    icon: "🏆",
    description: "影響力と長期的な関係構築の極意を学ぶ",
    modules: [

        // =============================================
        // Module 601: 影響力と説得の原理
        // =============================================
        {
            id: 601,
            title: "影響力と説得の原理",
            duration: "12分",
            content: `
<h2>🎯 影響力と説得の原理</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>影響力とは<strong>相手を無理に動かす力ではなく、自然と「そうしたい」と思わせる力</strong>です。ロバート・チャルディーニの研究を基に学びましょう。</p>
</div>

<h3>🔬 チャルディーニの影響力の6原則</h3>

<div class="visual-box">
<div class="visual-box-title">人を動かす6つの心理原則</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;padding:15px 0;">
<div style="background:#FFF3E0;border:2px solid #E85D04;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">🎁</div>
<div style="font-weight:700;font-size:0.85rem;">返報性</div>
<div style="font-size:0.75rem;color:#666;">もらったら<br>返したくなる</div>
</div>
<div style="background:#E3F2FD;border:2px solid #1976D2;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">🤝</div>
<div style="font-weight:700;font-size:0.85rem;">コミットメント</div>
<div style="font-size:0.75rem;color:#666;">一度決めたら<br>一貫したくなる</div>
</div>
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">👥</div>
<div style="font-weight:700;font-size:0.85rem;">社会的証明</div>
<div style="font-size:0.75rem;color:#666;">みんながやっている<br>ことは正しい</div>
</div>
<div style="background:#F3E5F5;border:2px solid #7B1FA2;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">❤️</div>
<div style="font-weight:700;font-size:0.85rem;">好意</div>
<div style="font-size:0.75rem;color:#666;">好きな人の<br>お願いは聞きたい</div>
</div>
<div style="background:#FFCDD2;border:2px solid #E53935;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">👔</div>
<div style="font-weight:700;font-size:0.85rem;">権威</div>
<div style="font-size:0.75rem;color:#666;">専門家の意見は<br>信じやすい</div>
</div>
<div style="background:#E0F2F1;border:2px solid #00897B;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">⏳</div>
<div style="font-weight:700;font-size:0.85rem;">希少性</div>
<div style="font-size:0.75rem;color:#666;">限られたものは<br>欲しくなる</div>
</div>
</div>
</div>

<h3>💡 日常での活用例</h3>

<table>
<tr><th>原則</th><th>日常の活用</th></tr>
<tr><td>返報性</td><td>先に情報や助けを提供する → 相手も自然と返してくれる</td></tr>
<tr><td>コミットメント</td><td>小さなお願いから始める → 徐々に大きなお願いへ</td></tr>
<tr><td>社会的証明</td><td>「みんなもやっていますよ」と伝える</td></tr>
<tr><td>好意</td><td>日頃の関係構築が、いざというときの頼みやすさにつながる</td></tr>
<tr><td>権威</td><td>データや専門家の意見を引用して説得力を高める</td></tr>
<tr><td>希少性</td><td>「今だけ」「限定」の要素を伝える</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 倫理的な使い方</div>
<p>これらの原則は<strong>操作ではなく、Win-Winの関係構築</strong>のために使いましょう。相手を騙したり不利な状況に追い込むために使うのは、長期的な信頼を壊します。</p>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>影響力の6原則：<strong>返報性・コミットメント・社会的証明・好意・権威・希少性</strong></li>
<li>日頃の<strong>関係構築</strong>が影響力の土台</li>
<li>操作ではなく<strong>Win-Win</strong>のために使う</li>
</ul>
</div>
`,
            quiz: [
                { id: "q601_1", type: "choice", question: "「もらったら返したくなる」心理原則を何と呼びますか？", options: ["社会的証明", "返報性の原理", "コミットメント", "希少性"], answer: 1, explanation: "返報性の原理は、何かをしてもらうとお返しをしたくなるという心理的傾向です。" },
                { id: "q601_2", type: "choice", question: "影響力の原則を使う際に最も重要な考え方はどれですか？", options: ["自分の利益を最大化する", "相手を効率的に説得する", "Win-Winの関係構築のために使う", "できるだけ多くの原則を同時に使う"], answer: 2, explanation: "影響力の原則は操作のためではなく、お互いにとって良い関係構築のために倫理的に使うことが大切です。" },
            ]
        },

        // =============================================
        // Module 602: ストーリーテリング
        // =============================================
        {
            id: 602,
            title: "ストーリーテリング",
            duration: "12分",
            content: `
<h2>📖 ストーリーテリング</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>人は<strong>データよりもストーリーに心を動かされます</strong>。事実を22倍記憶に残りやすくするのが、ストーリーの力です。</p>
</div>

<h3>📐 ストーリーの基本構造</h3>

<div class="visual-box">
<div class="visual-box-title">心を動かすストーリーの3幕構成</div>
<div style="display:flex;flex-direction:column;gap:8px;padding:15px;max-width:500px;margin:0 auto;">
<div style="background:#E3F2FD;border-left:4px solid #1976D2;padding:14px 16px;border-radius:0 8px 8px 0;">
<strong>第1幕：セットアップ</strong><br>
<span style="font-size:0.85rem;">状況を説明する。主人公（自分）の課題や困難を提示。</span><br>
<span style="font-size:0.8rem;color:#666;">例：「3年前、私は人前で話すのが本当に苦手でした...」</span>
</div>
<div style="background:#FFF3E0;border-left:4px solid #E85D04;padding:14px 16px;border-radius:0 8px 8px 0;">
<strong>第2幕：葛藤・転換点</strong><br>
<span style="font-size:0.85rem;">困難に立ち向かう過程。変化のきっかけとなる出来事。</span><br>
<span style="font-size:0.8rem;color:#666;">例：「ある日、先輩に言われた一言で目が覚めました...」</span>
</div>
<div style="background:#E8F5E9;border-left:4px solid #4CAF50;padding:14px 16px;border-radius:0 8px 8px 0;">
<strong>第3幕：解決・学び</strong><br>
<span style="font-size:0.85rem;">どう乗り越えたか。そこから得た教訓。</span><br>
<span style="font-size:0.8rem;color:#666;">例：「今では100人の前でプレゼンできるようになりました」</span>
</div>
</div>
</div>

<h3>🎯 日常で使えるストーリーテリング</h3>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #EF4444;">
<h4 style="color:#EF4444;">❌ データだけ</h4>
<p>「コミュニケーション研修を受けた社員の生産性が23%向上しました」</p>
<p style="font-size:0.85rem;color:#888;">→ 正しいが記憶に残りにくい</p>
</div>
<div class="compare-card" style="border-left:4px solid #4CAF50;">
<h4 style="color:#4CAF50;">✅ ストーリー + データ</h4>
<p>「入社2年目の佐藤さんは、会議で一言も発言できない自分に悩んでいました。研修後、初めて企画を提案し、それがチームの売上を23%伸ばしました」</p>
<p style="font-size:0.85rem;color:#888;">→ 具体的で心に残る</p>
</div>
</div>

<h3>🛠 すぐ使えるストーリーフレーム</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>「Before → After → Bridge」</strong>
以前はこうだった → 今はこうなった → どうやって変わったか
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>「失敗 → 学び → 成長」</strong>
こんな失敗をした → そこから学んだこと → 今に活きていること
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>「気づきの瞬間」</strong>
ある出来事をきっかけに → こんな気づきがあった → それ以来こうしている
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>ストーリーは事実を<strong>22倍記憶に残りやすく</strong>する</li>
<li><strong>3幕構成</strong>（セットアップ→葛藤→解決）が基本</li>
<li>データにストーリーを添えると<strong>説得力が大幅アップ</strong></li>
</ul>
</div>
`,
            quiz: [
                { id: "q602_1", type: "choice", question: "ストーリーテリングの3幕構成で、2番目に来るのはどれですか？", options: ["セットアップ", "葛藤・転換点", "解決・学び", "データの提示"], answer: 1, explanation: "3幕構成は「セットアップ → 葛藤・転換点 → 解決・学び」の順です。" },
                { id: "q602_2", type: "choice", question: "ストーリーはデータだけと比べて何倍記憶に残りやすいと言われていますか？", options: ["2倍", "5倍", "22倍", "100倍"], answer: 2, explanation: "研究によると、ストーリーは事実やデータだけと比較して22倍記憶に残りやすいとされています。" },
            ]
        },

        // =============================================
        // Module 603: 長期的な人間関係のメンテナンス
        // =============================================
        {
            id: 603,
            title: "長期的な人間関係のメンテナンス",
            duration: "10分",
            content: `
<h2>🔧 長期的な人間関係のメンテナンス</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>人間関係は<strong>築くよりも維持する方が難しい</strong>と言われます。長く続く関係には、意識的なメンテナンスが必要です。</p>
</div>

<h3>🏦 感情の銀行口座</h3>

<div class="visual-box">
<div class="visual-box-title">スティーブン・コヴィーの「感情の銀行口座」</div>
<div style="display:flex;justify-content:center;gap:20px;flex-wrap:wrap;padding:15px 0;">
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:20px;text-align:center;min-width:200px;">
<div style="font-size:1.5rem;">💚 預け入れ</div>
<div style="font-size:0.85rem;text-align:left;margin-top:8px;">
・約束を守る<br>
・感謝を伝える<br>
・相手の話を聴く<br>
・期待に応える<br>
・相手を理解しようとする
</div>
</div>
<div style="background:#FFCDD2;border:2px solid #E53935;border-radius:12px;padding:20px;text-align:center;min-width:200px;">
<div style="font-size:1.5rem;">❤️ 引き出し</div>
<div style="font-size:0.85rem;text-align:left;margin-top:8px;">
・約束を破る<br>
・感謝を忘れる<br>
・話を聴かない<br>
・期待を裏切る<br>
・自分の都合を押し通す
</div>
</div>
</div>
<p style="font-size:0.85rem;color:#666;margin-top:10px;">日常的に「預け入れ」を続けることで、多少の「引き出し」があっても関係は壊れません。</p>
</div>

<h3>📅 関係メンテナンスの習慣</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>定期的な連絡</strong>
月に1回でもメッセージを送る。「元気にしていますか？」だけでもOK。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>記念日・イベントを覚える</strong>
誕生日、昇進、結婚記念日などにメッセージを送る。カレンダーに登録しておく。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>「思い出した」を伝える</strong>
「〇〇を見て△△さんのことを思い出しました」というメッセージは心に響く。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>困ったときに助ける</strong>
相手が困っているときに手を差し伸べることが、最も強い信頼を築く。
</div>
</div>
</div>

<h3>⚠️ 関係が冷えたときの対処法</h3>

<div class="info-box formula">
<div class="info-box-title">🔑 疎遠になった関係を復活させる3ステップ</div>
<ol>
<li><strong>気軽なメッセージ</strong>：「お久しぶりです！お元気ですか？」から始める</li>
<li><strong>具体的なきっかけ</strong>：「〇〇を見て思い出しました」と理由を添える</li>
<li><strong>次のアクション</strong>：「今度お茶でもいかがですか？」と提案する</li>
</ol>
<p style="font-size:0.85rem;margin-top:8px;">※ 疎遠になったことを謝る必要はありません。自然に再開すればOKです。</p>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li><strong>感情の銀行口座</strong>に日頃から「預け入れ」を続ける</li>
<li><strong>定期的な連絡</strong>と<strong>記念日のメッセージ</strong>で関係を維持</li>
<li>疎遠になっても<strong>気軽に再開</strong>すればOK</li>
</ul>
</div>
`,
            quiz: [
                { id: "q603_1", type: "choice", question: "「感情の銀行口座」への「預け入れ」にあたるのはどれですか？", options: ["約束を破る", "自分の都合を押し通す", "約束を守り、感謝を伝える", "連絡を放置する"], answer: 2, explanation: "約束を守ること、感謝を伝えることは「感情の銀行口座」への預け入れです。日頃から積み重ねることが大切です。" },
                { id: "q603_2", type: "choice", question: "疎遠になった関係を復活させるとき、最初にすべきことは？", options: ["疎遠になったことを謝る", "長文で近況を報告する", "気軽なメッセージを送る", "SNSで間接的に存在を示す"], answer: 2, explanation: "疎遠になったことを重く受け止めず、「お久しぶりです！お元気ですか？」と気軽にメッセージを送るのがベストです。" },
            ]
        },

        // =============================================
        // Module 604: 自分らしいコミュニケーションスタイル
        // =============================================
        {
            id: 604,
            title: "自分らしいコミュニケーションスタイル",
            duration: "10分",
            content: `
<h2>🌟 自分らしいコミュニケーションスタイル</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>ここまで多くのテクニックを学びましたが、最も大切なのは<strong>テクニックに振り回されるのではなく、自分らしさを土台にすること</strong>です。</p>
</div>

<h3>🪞 自分の強みを知る</h3>

<div class="visual-box">
<div class="visual-box-title">コミュニケーションの強み発見チェック</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;padding:15px 0;">
<div style="background:#E3F2FD;border:2px solid #1976D2;border-radius:12px;padding:16px;">
<div style="font-weight:700;font-size:0.9rem;">🗣 話す力が強い人</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">プレゼン・説明が得意。ストーリーテリングを磨こう。</div>
</div>
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:16px;">
<div style="font-weight:700;font-size:0.9rem;">👂 聴く力が強い人</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">相談されやすい。傾聴と質問力をさらに伸ばそう。</div>
</div>
<div style="background:#FFF3E0;border:2px solid #E85D04;border-radius:12px;padding:16px;">
<div style="font-weight:700;font-size:0.9rem;">✍️ 書く力が強い人</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">メールやメッセージが得意。テキストコミュニケーションを活かそう。</div>
</div>
<div style="background:#F3E5F5;border:2px solid #7B1FA2;border-radius:12px;padding:16px;">
<div style="font-weight:700;font-size:0.9rem;">👀 観察力が強い人</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">空気を読むのが得意。非言語の読み取りを武器に。</div>
</div>
</div>
</div>

<h3>🎯 自分だけのルールを作る</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>自分の「コア・バリュー」を3つ決める</strong>
例：「誠実さ」「好奇心」「感謝」。これがコミュニケーションの軸になる。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>得意なスタイルを伸ばす</strong>
すべてのテクニックを完璧にする必要はない。自分の強みを活かす方が自然。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>苦手なところは最低限カバーする</strong>
苦手な部分は「致命的にならないレベル」を目指せば十分。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>毎日1つだけ実践する</strong>
学んだことを一度に全部やろうとしない。1日1つ意識すれば、1ヶ月で大きく変わる。
</div>
</div>
</div>

<h3>📝 コミュニケーション成長の記録</h3>

<div class="info-box formula">
<div class="info-box-title">🔑 振り返りの3つの質問</div>
<p>毎週、以下の3つを振り返ってみましょう：</p>
<ol>
<li><strong>今週うまくいったコミュニケーションは？</strong>（成功体験の蓄積）</li>
<li><strong>今週うまくいかなかったことは？</strong>（改善点の発見）</li>
<li><strong>来週意識したいことは？</strong>（次のアクション）</li>
</ol>
</div>

<h3>🎓 最後のメッセージ</h3>

<div class="info-box success">
<div class="info-box-title">🎉 全コース完了おめでとうございます！</div>
<p>ここまで学んだすべてのスキルの根底にあるのは、たった一つのシンプルな原則です：</p>
<p style="text-align:center;font-size:1.3rem;font-weight:800;color:var(--primary);margin:16px 0;">「相手に真剣に興味を持つこと」</p>
<p>テクニックは手段にすぎません。相手を大切に思う気持ちがあれば、多少の失敗は問題になりません。</p>
<ul>
<li><strong>完璧を目指さない</strong>。不器用でも誠実なコミュニケーションは伝わる</li>
<li><strong>失敗を恐れない</strong>。すべての失敗は学びになる</li>
<li><strong>小さな一歩から</strong>。明日、誰かに笑顔で挨拶することから始めよう</li>
</ul>
</div>
`,
            quiz: [
                { id: "q604_1", type: "choice", question: "コミュニケーションスキル向上で最も大切な姿勢はどれですか？", options: ["すべてのテクニックを完璧に使いこなす", "自分の強みを活かし、苦手は最低限カバーする", "常に新しいテクニックを学び続ける", "特定のスタイルだけを極める"], answer: 1, explanation: "すべてを完璧にする必要はありません。自分の強みを伸ばし、苦手な部分は致命的にならないレベルに保つことが現実的で効果的です。" },
                { id: "q604_2", type: "choice", question: "このコース全体の根底にある、最も重要な原則は何ですか？", options: ["テクニックを多く身につけること", "相手に真剣に興味を持つこと", "常に笑顔でいること", "自分の話を上手にすること"], answer: 1, explanation: "すべてのコミュニケーションスキルの根底にあるのは「相手に真剣に興味を持つこと」です。テクニックは手段にすぎません。" },
            ]
        },
    ]
};
