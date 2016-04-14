// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

// Meanings
var enero = "Ambitious and serious<br>Loves to teach and be taught<br>Always looking at people's flaws and weaknesses<br>Likes to criticize<br>Hardworking and productive<br>Smart, neat and organized<br>Sensitive and has deep thoughts<br>Knows how to make others happy<br>Quiet unless excited or tensed<br>Rather reserved<br>Highly attentive<br>Resistant to illnesses but prone to colds<br>Romantic but has difficulties expressing love<br>Loves children<br>Homely person<br>Loyal<br>Needs to improve social abilities<br>Easily jealous",
    febrero = "Abstract thoughts<br>Loves reality and abstract<br>Intelligent and clever<br>Changing personality<br>Temperamental<br>Quiet, shy and humble<br>Low self esteem<br>Honest and loyal<br>Determined to reach goals<br>Loves freedom<br>Rebellious when restricted<br>Loves aggressiveness<br>Too sensitive and easily hurt<br>Showing anger easily<br>Dislike unnecessary things<br>Loves making friends but rarely shows it<br>Daring and stubborn<br>Ambitious<br>Realizing dreams and hopes<br>Sharp<br>Loves entertainment and leisure<br>Romantic on the inside not outside<br>Superstitious and ludicrous<br>Spendthrift<br>Learns to show emotions",
    marzo = "Attractive personality<br>Affectionate<br>Shy and reserved<br>Secretive<br>Naturally honest, generous and sympathetic<br>Loves peace and serenity<br>Sensitive to others<br>Loves to serve others<br>Not easily angered<br>Trustworthy<br>Appreciative and returns kindness<br>Observant and assess others<br>Revengeful<br>Loves to dream and fantasize<br>Loves traveling<br>Loves attention<br>Hasty decisions in choosing partners<br>Loves home decors<br>Musically talented<br>Loves special things<br>Moody",
    abril = "Active and dynamic<br>Decisive and haste but tends to regret<br>Attractive and affectionate to oneself<br>Strong mentality<br>Loves attention<br>Diplomatic<br>Consoling<br>Friendly and solves people's problems<br>Brave and fearless<br>Adventurous<br>Loving and caring<br>Suave and generous<br>Emotional<br>Revengeful<br>Aggressive<br>Hasty<br>Good memory<br>Moving<br>Motivate one and the others<br>Sickness usually of the head and chest<br>Easily get too jealous",
    mayo = "Stubborn and hard-hearted<br>Strong-willed and highly motivated<br>Sharp thoughts<br>Easily angered<br>Attracts others and loves attention<br>Deep feelings<br>Beautiful physically and mentally<br>Firm standpoint<br>Easily influenced<br>Needs no motivation<br>Easily consoled<br>Systematic (left brain)<br>Loves to dream<br>Strong clairvoyance<br>Understanding<br>Sickness usually in the ear and neck<br>Good imagination<br>Good debating skills<br>Good physical<br>Weak breathing<br>Loves literature and the arts<br>Loves traveling<br>Dislike being at home<br>Restless<br>Not having many children<br>Hardworking<br>High-spirited<br>Spendthrift",
    junio = "Thinks far with vision<br>Easily influenced by kindness<br>Polite and soft-spoken<br>Having lots of ideas<br>Sensitive<br>Active mind<br>Hesitating<br>Tends to delay<br>Choosy and always wants the best<br>Temperamental<br>Funny and humorous<br>Loves to joke<br>Good debating skills<br>Talkative<br>Daydreamer<br>Friendly<br>Knows how to make friends<br>Abiding<br>Able to show character<br>Easily hurt<br>Prone to getting colds<br>Loves to dress up<br>Easily bored<br>Fussy<br>Seldom show emotions<br>Takes time to recover when hurt<br>Brand conscious<br>Executive<br>Stubborn",
    julio = "Fun to be with<br>Secretive<br>Difficult to fathom and to be understood<br>Quiet unless excited or tensed<br>Takes pride in oneself<br>Has reputation<br>Easily consoled<br>Honest<br>Concern about people's feelings<br>Tactful<br>Friendly<br>Approachable<br>Very emotional<br>Temperamental and unpredictable<br>Moody and easily hurt<br>Witty and starkly<br>Sentimental<br>Not revengeful<br>Forgiving but never forgets<br>Dislike nonsensical and unnecessary things<br>Guides others physically and mentally<br>Sensitive and forms impressions carefully<br>Caring and loving<br>Treats others equally<br>Strong sense of sympathy<br>Wary and sharp<br>Judge people through observations<br>Hardworking<br>No difficulties in studying<br>Loves to be alone<br>Always broods about the past and the old friends<br>Likes to be quiet<br>Homely person<br>Waits for friends<br>Never looks for friends<br>Not aggressive unless provoked<br>Prone to having stomach and dieting problems<br>Loves to be loved<br>Easily hurt but takes long to recover<br>Overly concerned<br>Puts in effort in work",
    agosto = "Loves to joke<br>Attractive<br>Suave and caring<br>Brave and fearless<br>Firm and has leadership qualities<br>Knows how to console others<br>Too generous and egoistic<br>Tacked high pride of oneself<br>Thirsty for praises<br>Extraordinary spirit<br>Easily angered<br>Angry when provoked<br>Easily jealous<br>Observant<br>Careful and cautious<br>Thinks quickly Independent thoughts<br>Loves to lead and to be led<br>Loves to dream<br>Talented in the arts, music and defense<br>Sensitive but not petty<br>Learns to relax<br>Hasty and rushy<br>Romantic<br>Loving and caring<br>Loves to make friends",
    septiembre = "Suave and compromising<br>Careful, cautious and organized<br>Likes to point out people's mistakes<br>Quiet but able to talk well<br>Calm and cool<br>Kind and sympathetic<br>Concerned and detailed<br>Trustworthy, loyal and honest<br>Does work well<br>Sensitive<br>Thinking<br>Good memory<br>Clever and knowledgeable<br>Loves to look for information<br>Must control oneself when criticizing<br>Able to motivate oneself<br>Understanding<br>Secretive<br>Loves sports, leisure and traveling<br>Hardly shows emotions<br>Tends to bottle up feelings<br>Choosy especially in relationships<br>Loves wide things<br>Systematic",
    octubre = "Loves to chat<br>Loves those who loves him<br>Loves to takes things at the center<br>Attractive and suave<br>Inner and physical beauty<br>Sympathetic<br>Treats friends importantly<br>Always making friends<br>Easily hurt but recovers easily<br>Bad tempered<br>Selfish<br>Seldom helps unless asked<br>Daydreamer<br>Very opinionated<br>Does not care of what others think<br>Emotional<br>Decisive<br>Strong clairvoyance<br>Loves to travel, the arts and literature<br>Soft-spoken, loving and caring Romantic<br>Touchy and easily jealous<br>Concerned<br>Loves outdoors<br>Just and fair<br>Spendthrift and easily influenced<br>Easily lose confidence",
    noviembre = "Have a lot of ideas<br>Difficult to fathom<br>Thinks forward<br>Unique and brilliant<br>Extraordinary ideas<br>Sharp thinking<br>Fine and strong clairvoyance<br>Can become good doctors<br>Careful and cautious<br>Dynamic in personality<br>Secretive<br>Inquisitive<br>Knows how to dig secrets<br>Always thinking<br>Less talkative but amiable<br>Brave and generous<br>Patient<br>Stubborn and hard-hearted<br>If there is a will, there is a way<br>Determined<br>Never give up<br>Hardly become angry unless provoked<br>Loves to be alone<br>Thinks differently from others<br>Sharp-minded<br>Motivates oneself<br>Does not appreciates praises<br>High-spirited<br>Well-built and tough<br>Deep love and emotions<br>Romantic<br>Uncertain in relationships<br>Homely<br>Hardworking<br>High abilities<br>Trustworthy<br>Honest and keeps secrets<br>Not able to control emotions<br>Unpredictable",
    diciembre = "Loyal and generous<br>Patriotic<br>Active in games and interactions<br>Impatient and hasty<br>Ambitious<br>Influential in organizations<br>Fun to be with<br>Loves to socialize<br>Loves praises<br>Loves attention<br>Loves to be loved<br>Honest and trustworthy<br>Not pretending<br>Short tempered<br>Changing personality<br>Not egoistic<br>Tacked high pride in oneself<br>Hates restrictions<br>Loves to joke<br>Good sense of humor<br>Logical";

// Show Meanings
function ShowMeanings(month) {
    document.getElementById("show").innerHTML = month;
    document.getElementById("backTop").style.visibility="visible";
}

$("#Jan").on('click', function() {
    ShowMeanings(enero);
});

$("#Feb").on('click', function() {
    ShowMeanings(febrero);
});

$("#Mar").on('click', function() {
    ShowMeanings(marzo);
});

$("#Apr").on('click', function() {
    ShowMeanings(abril);
});

$("#May").on('click', function() {
    ShowMeanings(mayo);
});

$("#Jun").on('click', function() {
    ShowMeanings(junio);
});

$("#July").on('click', function() {
    ShowMeanings(julio);
});

$("#Aug").on('click', function() {
    ShowMeanings(agosto);
});

$("#Sept").on('click', function() {
    ShowMeanings(septiembre);
});

$("#Oct").on('click', function() {
    ShowMeanings(octubre);
});

$("#Nov").on('click', function() {
    ShowMeanings(noviembre);
});

$("#Dec").on('click', function() {
    ShowMeanings(diciembre);
});
