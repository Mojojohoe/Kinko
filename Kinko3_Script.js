﻿$( document ).ready(function() {

var ka = 0

while (ka <= 2000) {
if ($('#kp' + ka).data('info')) {
            $('#kp' + ka).prepend('<a class="kinko_ttips ttip' + ka + '" href="#"><div class="tih"></div><span id="ttxt' + ka + '"></span></a>'); 
}
if ($('#kp' + ka).hasClass("ck")) {
            $('#kp' + ka).wrap('<tr class="trow ckr" id="tr' + ka + '"><td></td></tr>'); 
        }
else{
	$('#kp' + ka).wrap('<tr class="trow" id="tr' + ka + '"><td></td></tr>'); 
}
$('#tr' + ka).prepend('<td class="kname" id="kn' + ka + '"></td><td class="kdesc" id="kd' + ka + '"></td>'); 
ka++; 
}
while (ka == 2001) {
$('.trow').wrapAll('<table class="kinko-table results"><tbody></tbody></table>'); 
$('.results').prepend('<thead><tr><th class="kinko-kn"><h2>Kink Name</h2></th><th class="kinko-kd"><h2>Description</h2></th><th class="kinko-kp"><h2>Preference</h2></th></tr><tr class="warning no-kinks"><td colspan="4">No results</td></tr></thead>'); 
ka++;
}
$('.search').after('<button onclick="Compare()" type="button" class="kbut">Compare</button>');


$("#kn2").text("3+ Penetration");$("#kd2").text("The act of penetrating a single character with three or more objects, including but not limited to cocks, sex toys, hands, etc., or receiving such actions.");
$("#kn3").text("Abrasions");$("#kd3").text("Engaging in a situation in which at least one character will receive abrasions, defined as scrapes that are at their mildest in severity capable of causing bleeding; typically administered via rough or coarse objects, such as sandpaper or cement.");
$("#kn4").text("Absorption");$("#kd4").text("Vore by means of merging with the predator.");
$("#kn5").text("Abuse");$("#kd5").text("The act of applying abusive actions onto a character, typically through acts of physical violence. Involves subjecting a character(s) to unpleasant situations and behaviors.");
$("#kn6").text("Accidental Vore");$("#kd6").text("Vore that occurs unintentionally. Does not suggest fault of either pred or prey, only that the consumption was accidental.");
$("#kn7").text("Adultery");$("#kd7").text("The act of voluntary sexual intercourse between a person and another character who is not their established spouse or partner.");
$("#kn8").text("Affection");$("#kd8").text("The act of providing the sensations of tenderness and fondness, having characters express such feelings with one another through endearing behaviors.");
$("#kn9").text("Aftercare");$("#kd9").text("Comforting care and maintenance carried out between two characters after a particularly rigorous experience, such as after BDSM scenes or heavy / harsh exchanges. May consist of talking, cuddling, and various forms of pampering.");
$("#kn10").text("Age Differences");$("#kd10").text("Adult characters with significant gaps in the ages between them (does not imply underage).");
$("#kn11").text("Age Progression");$("#kd11").text("Scenes in which a character's age progresses, often focusing on their physical development but may incorporate mental aspects.");
$("#kn12").text("Age Regression");$("#kd12").text("Scenes in which a character becomes younger, physically and sometimes mentally.");
$("#kn13").text("Ageplay");$("#kd13").text("Refers to scenes that involve one or more significantly underage characters, and putting a significant focus on that age aspect and it's involvement in the roleplay (such as highlighting youthfulness, immaturity, or the taboo nature of one's age). May include sexual interactions, but not necessarily.");
$("#kn14").text("Ahegao");$("#kd14").text("Commonly referred to as 'fucked silly.' Refers to a character wearing a facial expression that signifies an immense amount of pleasure during sexual intercourse / or sexual arousal.");
$("#kn15").text("All the Way Through");$("#kd15").text("The act of a character being penetrated by an object (generally in a nonharmful fashion), and having it extend out their other end - typically ass / vagina to mouth, vice versa, or other orifices in a less realistic fashion. May also include fluids being pumped into one end and coming out the other.");
$("#kn16").text("Alternative Alternative Vore");$("#kd16").text("Vore methods that are considered alterative even within the voraphile community. These methods can include such methods hair, nasal or vore.");
$("#kn17").text("Alternative Pregnancy");$("#kd17").text("Pregnancy that takes place in areas of the body other than the womb through vaginal means, such as the breasts, balls, limbs, tail, and so on.");
$("#kn18").text("Alternative Vore");$("#kd18").text("The act of physically consuming another character, performed through an orifice other than the mouth, penis, vagina or anus, or receiving such actions.");
$("#kn19").text("Amphibians");$("#kd19").text("Salamanders, Frogs, Toads, Newts, etc.");
$("#kn20").text("Amputees");$("#kd20").text("Characters that have had limbs amputated, or are missing a limb / limbs.");
$("#kn21").text("Anal Fisting");$("#kd21").text("The act of inserting one's hand(s) and / or arm(s) into one's partner's anus, or being the recipient of such acts.");
$("#kn22").text("Anal Pregnancy");$("#kd22").text("Pregnancy that takes place rectally in the anal canal.");
$("#kn23").text("Anal Prolapse");$("#kd23").text("Where insides of the anus are pulled out by force (unnatural means, such as a cream, liquid or suction method, or internal massage) or naturally (either by a cock, dildo, or pushing).");
$("#kn24").text("Anal Sex (Giving)");$("#kd24").text("The act of anally penetrating a partner.");
$("#kn25").text("Anal Sex (Receiving)");$("#kd25").text("The act of being anally penetrated.");
$("#kn26").text("Anal Training");$("#kd26").text("Engaging in the use of the various anatomy of a character's anus to otherwise prepare and / or acclimate the character to an insertion, the size of which the character would not otherwise be comfortable taking.");
$("#kn27").text("Anal Virginity");$("#kd27").text("Engaging in anal sex with a character who has never been anally penetrated before, or being anally penetrated while playing a character that has never been penetrated before.");
$("#kn28").text("Anal Vore");$("#kd28").text("Vore where something or someone is swallowed into the anus.");
$("#kn29").text("Anatomically Correct");$("#kd29").text("Expresses an interest in characters that have realistic and average body proportions.");
$("#kn30").text("Androgyny");$("#kd30").text("Gender ambiguity in appearance. May also be found in fashion, voice, gender identity, sexual identity, or lifestyle.");
$("#kn31").text("Angels");$("#kd31").text("Angels or other celestials, typically magical.");
$("#kn32").text("Animal Anatomy");$("#kd32").text("Expresses an interest in characters with penises or vaginas that are exact replicas of those of real animals.");
$("#kn33").text("Animal Transformation");$("#kd33").text("Transforming a character into an animal creature, typically quadrupedal but not necessarily, may some varying degree of sentience or feral mindedness.");
$("#kn34").text("Animals / Ferals");$("#kd34").text("Refers to the preference and / or interest in partners are typically quadrupedal and / or non-anthropomorphized, animals, which may or may not necessarily be anatomically accurate in regard to body size.");
$("#kn35").text("Anthro Characters");$("#kd35").text("Characters that are anthropomorphic in nature, typically defined as an object or animal species with human characteristics.");
$("#kn36").text("Aphrodisiacs");$("#kd36").text("The incorporation of a food, drink, drug, scent, or other such stimulate that generates sexual arousal.");
$("#kn37").text("Apparatuses");$("#kd37").text("The use of complex objects with moving parts in order to bondage, immobilize or otherwise sexually gratify and / or incapacitate a character, in the sexual context of an RP.");
$("#kn38").text("Approaching IC");$("#kd38").text("Approaching another roleplayer while 'in character.' Generally means carrying out actions, speaking as your character, and other forms of character emoting. This is a means of diving straight into roleplay with little to no out-of-character discussion beforehand.");
$("#kn39").text("Approaching OOC");$("#kd39").text("Approaching another roleplayer while 'out of character.' Generally means speaking to another player as yourself the player, not as your character, and does not involve actions or emotes from your character. This is done to discuss scenes and RP ideas first with the player, rather than jumping into something without forethought.");
$("#kn40").text("Armpits");$("#kd40").text("Play revolving around the armpit region.");
$("#kn41").text("Ass Growth");$("#kd41").text("A situation where at least one character's ass grows in size, typically to fantastical proportions, by any means, including but not limited to magical or chemical.");
$("#kn42").text("Ass to Mouth");$("#kd42").text("The act of anally penetrating a character with a cock (or phallic object, in terms of strap ons), then withdrawing the cock and having it go straight to the other's mouth for them to perform oral.");
$("#kn43").text("Ass Transformation");$("#kd43").text("The act of the recipient being transformed into the partners ass. Often the mouth becomes the anus. Sometimes affectionately known as 'ass-imilation'.");
$("#kn44").text("Ass Worship");$("#kd44").text("Gratuitous acknowledgment of one's partner's ass or buttocks, either verbal and / or physical, or receiving such actions.");
$("#kn45").text("Asset Theft");$("#kd45").text("The act of taking entire physical assets of another. Usually sexual in nature. Often paired with nullification.");
$("#kn46").text("Auto-Fellatio");$("#kd46").text("The act of performing fellatio or cunnilingus on one's self.");
$("#kn47").text("Avians");$("#kd47").text("Birds, gryphons, phoenixes, rocs, chimeras etc.");
$("#kn48").text("Babysitter");$("#kd48").text("A situation in which one character will either be or roleplay as another character's babysitter.");
$("#kn49").text("Bad Ends");$("#kd49").text("A scenario where a character doesn't necessarily have to face death, but is presented with an unfortunate and inevitable future. May involve situations where a character is forced to submit to an undesired opposition or is trapped in a dangerous scenario where there is no escape.");
$("#kn50").text("Ballbusting");$("#kd50").text("Harm to the testicles, usually for sexual pleasure.");
$("#kn51").text("Barbed Cocks");$("#kd51").text("Expresses an interest in penises with barbed heads; typically feline.");
$("#kn52").text("Bathroom Control");$("#kd52").text("A situation in which a character controls when, how and where another character may use the bathroom in any fashion, typically as a form of control or degradation.");
$("#kn53").text("Bats");$("#kd53").text("Bats and other true-flight mammals.");
$("#kn54").text("Begging");$("#kd54").text("The self-abasing act of pleading, as a form of submission, being incorporated into an RP.");
$("#kn55").text("Belching / Burping");$("#kd55").text("Belching, during sexual intercourse, or just as an act during the roleplay. May be exaggerated (visible expulsions of air) and / or with exaggerated burping noises, but not necessarily.");
$("#kn56").text("Belly Fucking");$("#kd56").text("The act of placing one's penis into / against a character's belly (may be through the navel, making use of significant body fat, or other means) and achieving climax due to the friction thereof, or receiving such actions.");
$("#kn57").text("Belly Play");$("#kd57").text("Play that revolves around the stomach / midsection region, be it massaging, groping, squeezing, or otherwise.");
$("#kn58").text("Bimbofication");$("#kd58").text("Scenes in which someone is turned into a stereotypical bimbo, often including breast growth, intelligence-reduction, increased sex drive, and more subtle change to features such as hair-color or general appearance.");
$("#kn59").text("Birthing");$("#kd59").text("Scenes in which someone goes into labor or gives birth; participants may derive sexual gratification from the experience.");
$("#kn60").text("Biting");$("#kd60").text("The act of biting or being bitten; sometimes painful, sometimes playful.");
$("#kn61").text("Blindfolds");$("#kd61").text("The use of blindfolds or other objects to obscure the vision of at least one character in a sexual context.");
$("#kn62").text("Bloodplay");$("#kd62").text("Pertains to the inclusion of blood or the retrieval of blood in any form in a sexual context, or engaging in acts which will draw blood.");
$("#kn63").text("Blueberrification");$("#kd63").text("The process of a character being inflated into a spherical shape by swelling with juice, accompanied by their skin turning into shades of blue (or other fruit hues).");
$("#kn64").text("Body Hair");$("#kd64").text("Expresses in interest in characters that have body hair. Generally denotes hair on places like a character's chest, arms, legs, armpits, stomach trail, etc.");
$("#kn65").text("Body Part Transformation");$("#kd65").text("Transforming a character into a body part, or into a part of another character's body, may be done through a variety of means.");
$("#kn66").text("Body Swapping");$("#kd66").text("The act of two or more individuals swapping bodies through consciousness transfer, enabling them to inhabit the other's body.");
$("#kn67").text("Body Writing");$("#kd67").text("The act of writing, drawing, or painting various (typically sexual or degrading) words or pictures onto a character's body.");
$("#kn68").text("Bovines");$("#kd68").text("Bulls, cows, buffalo etc.");
$("#kn69").text("Brainfucking");$("#kd69").text("The act of physically inducing pleasure directly to the brain of a recipient. Often implies aural sex or tentacles.");
$("#kn70").text("Branding");$("#kd70").text("A situation in which at least one character will be branded, usually as a form of sadomasochism. Typically by means of applying intense heat in a specific pattern designed to visually show ownership.");
$("#kn71").text("Breaking");$("#kd71").text("Breaking someone’s will, or mind is used to describe the act of mentally wearing down a recipient until they are compliant. Very commonly when a dominant lead trains an unwilling submissive to accept or enjoy life in a demeaning role such as their pet or slave.");
$("#kn72").text("Breaking the 4th Wall");$("#kd72").text("The 4th wall is a conceptual wall that separates the works of fiction from the audience. Breaking the fourth wall in the instance of a roleplay means to imply the existence of, or interact with the player, or refer to events outside the roleplay in the real world. It may also imply the use of players as the characters within the roleplay. ");
$("#kn73").text("Breast / Nipple Play");$("#kd73").text("Play that revolves around the breasts and / or nipples.");
$("#kn74").text("Breast / Nipple Torture");$("#kd74").text("A situation in which at least one character's breasts or nipples will be the subject of physical, non-sexual pain of an extended duration.");
$("#kn75").text("Breast / Nipple Worship");$("#kd75").text("Gratuitous acknowledgement of one's partner's chest or nipples, either verbal and / or physical, or receiving such actions.");
$("#kn76").text("Breast Growth");$("#kd76").text("A situation in which at least one character's breasts grow in size, typically to fantastical proportions, by any means, including but not limited to magical or chemical.");
$("#kn77").text("Breast Smothering");$("#kd77").text("The act of smothering a character using one's breasts, making it hard to breathe.");
$("#kn78").text("Breast Vore");$("#kd78").text("Vore that occurs via breasts. The most common methods are via the cleavage where the prey is absorbed in between the breasts (Cleavage Vore), or via the nipple as if it is another orifice (Nipple Vore).");
$("#kn79").text("Breath Control");$("#kd79").text("A situation in which at least one character will have physical control over the breathing habits of another character, often by either intermittent choking and / or due to the penetration of the throat.");
$("#kn80").text("Breeding");$("#kd80").text("Entails the act sexual intercourse for the sole purpose of inducing pregnancy and / or producing offspring.");
$("#kn81").text("Bukkake");$("#kd81").text("The act of a group of at least two people ejaculating directly onto the face and / or body of a single recipient, or receiving such actions.");
$("#kn82").text("Burning");$("#kd82").text("A situation in which at least one character will be burned. May include burning with such things as cigars, cigarettes, hot iron, or other methods.");
$("#kn83").text("Caging");$("#kd83").text("The act of placing another character in a cage, or being placed in a cage, or other confining, device.");
$("#kn84").text("Canines");$("#kd84").text("Domesticated dogs, wolves, dingos, coyotes, jackals etc.");
$("#kn85").text("Cannibalism");$("#kd85").text("The act of consuming same / similar species, usually of the humanoid variety and intelligent. Typically denotes realism and a character being realistically eaten.");
$("#kn86").text("Canon Character Changes");$("#kd86").text("Expresses an interest in the character’s interactions with others being canon. Allowing the character to develop or evolve in different ways through multiple roleplays, depending on the roleplay’s content. ");
$("#kn87").text("Canon Characters");$("#kd87").text("Expressing an interest in characters from established 'canonized' media, derived from official publicized content such as movies, video games, TV, comics, and so on.");
$("#kn88").text("Caprinae");$("#kd88").text("Sheep, goats, etc.");
$("#kn89").text("Castration");$("#kd89").text("An action where the testicles (or ovaries) are removed or disabled, whether by surgical, chemical or magical means.");
$("#kn90").text("Cervical Penetration");$("#kd90").text("Engaging in sex that involves the penetration, by the penis or by another object, of a cervix; typically connotes exceptionally rough sex or exceptionally large insertions.");
$("#kn91").text("Cervines");$("#kd91").text("Deer, elk, moose etc.");
$("#kn92").text("Chastity");$("#kd92").text("Sexual abstinence, either willing or forced; this can include someone simply abstaining from sexual activity, or the wearing of a device that prevents it.");
$("#kn93").text("Choking");$("#kd93").text("A situation in which one character will control another character's breath with extreme force, and typically for extended and / or dangerous periods of time.");
$("#kn94").text("Chubby");$("#kd94").text("Expresses an interest in characters that are well-rounded and pudgy, with a little more extra weight than average but not necessarily fat.");
$("#kn95").text("Clit Play");$("#kd95").text("Play that is centered around the clitoris, applying stimulation and significant attention, usually as a form of achieving orgasm.");
$("#kn96").text("Clothed Sex");$("#kd96").text("Engaging in an RP where you and / or your partner are not undressed during sexual interaction.");
$("#kn97").text("Clothing Disposal");$("#kd97").text("The act of disposing of a prey's remains post vore, into items of clothing; often their own.");
$("#kn98").text("Clothing Play");$("#kd98").text("Expresses an interest in scenes where clothing plays a distinct involvement, such as lingerie, using certain articles of clothing sexually, or having a character wearing (or being made to wear) various outfits.");
$("#kn99").text("Clothing Transformation");$("#kd99").text("A branch of inanimate transformation which describes transformations into items of clothing, most commonly underwear or footwear.");
$("#kn100").text("Cock / Ball Growth");$("#kd100").text("A situation in which at least one character's penis and testicles grow in size, typically to fantastical proportions, by any means, including but not limited to magical or chemical infusion or due to sexual fluids becoming blocked or otherwise obstructed.");
$("#kn101").text("Cock / Ball Smothering");$("#kd101").text("The act of smothering a character with a cock and / or balls, making it difficult to breathe.");
$("#kn102").text("Cock / Balls Worship");$("#kd102").text("Gratuitous acknowledgment of one's partner's cock and / or balls, either verbal and / or physical, or receiving such actions; typically implies oral stimulation.");
$("#kn103").text("Cock Fucking");$("#kd103").text("The act of inserting one's penis into another penis and thrusting into it as if it were a more traditional orifice.");
$("#kn104").text("Cock Slapping");$("#kd104").text("The act of using one's penis to slap one's partner and / or being slapped by a penis, usually in order to humiliate or debase a bottom prior to or during fellatio.");
$("#kn105").text("Cock Transformation");$("#kd105").text("The act of the recipient being transformed into the partners penis. Often implies fusion during intercourse and a gradual loss of limbs and form.");
$("#kn106").text("Cock Vore");$("#kd106").text("The act of physically consuming another character, performed through the penis, often resulting in the prey character being lodged into the testicles, or being the recipient of such actions.");
$("#kn107").text("Cock Warming");$("#kd107").text("The act of slipping one's erection into a partner's body in order to keep warm, typically considered a more intimate and sexual means of spooning.");
$("#kn108").text("Coercion / Blackmail");$("#kd108").text("Refers to the inclusion of Coercion and / or Blackmail in the context of the story arc of an RP, often in the form of a semi-consensual means of receiving goods, services, or sex from a partner.");
$("#kn109").text("Coiling");$("#kd109").text("The act of becoming entwined, held or hugged in the grasp of a long tail, coils of a snake, serpent, or other long-bodied creature.");
$("#kn110").text("Competition");$("#kd110").text("Pertains to multiple dominants competing to administer domination the best, or multiple submissives competing to please a dominant the best.");
$("#kn111").text("Condom Disposal");$("#kd111").text("The act of disposing of a prey's remains post vore into a condom. Most usually this is semen.");
$("#kn112").text("Condoms");$("#kd112").text("The use of condoms in any way; typically refers to a preference for the use of condoms during penetration, but may also refer to condom play, in which a condom (typically filled), is used as a sex toy; or, the filling of condoms with fluids, such as semen.");
$("#kn113").text("Consensual");$("#kd113").text("A preference for sexual interactions between characters in an RP to be fully consenting, by their characters' own free wills.");
$("#kn114").text("Conversation");$("#kd114").text("Conversation that occurs out of character prior, during or after roleplays. Often expressed as a way of setting up a roleplay, discussing kinks or getting to know the player better. ");
$("#kn115").text("Cooking (Vore)");$("#kd115").text("The act of a character cooking / preparing a character (or being cooked / prepared) to be consumed by another. May involve a character whole or just parts of a character. Tends to involve the act of realistically preparing someone in the same way one would cook a traditional meal.");
$("#kn116").text("Corruption");$("#kd116").text("Refers to the loss of morality, characterized by a character starting pure and then becoming depraved in some way, typically ending with them being evil, slutty, or some combination of the two.");
$("#kn117").text("Creampie");$("#kd117").text("The act of orgasming into or onto an exposed, often gaping, orifice, or receiving such actions.");
$("#kn118").text("Crossdressing");$("#kd118").text("Engaging in an RP where one or more characters dress in the clothes considered traditionally atypical for their identifying gender.");
$("#kn119").text("Crotch Sniffing");$("#kd119").text("The act of receiving pleasure from inhaling the scent of the crotch, or receiving such actions. Emphasis is often placed on the musk and / or pheromone-related properties of the scent.");
$("#kn120").text("Crushing (Living)");$("#kd120").text("The act of crushing living organisms (such as people, animals, and other sentient life) with one's body, or being aroused by another individual doing so.");
$("#kn121").text("Crushing (Objects)");$("#kd121").text("The act of crushing inanimate objects (such as food, furniture, toys, housing structure) with one's body, or being aroused by another individual doing so.");
$("#kn122").text("Crying");$("#kd122").text("The involvement and presence of someone crying or making a character do so, usually as the result of pain or actions carried out against them (which may or may not stimulate arousal from the inflictor).");
$("#kn123").text("Cuckolding");$("#kd123").text("A scenario in which one partner is complicit in their partner's infidelity and derives sexual pleasure from it. Generally consists of watching their established partner have sexual relations with another individual, often where the other is considered to be 'better' than them, but not necessarily.");
$("#kn124").text("Cuddling");$("#kd124").text("Characters showing affection through hugging, snuggling, and other forms of physical closeness.");
$("#kn125").text("Cum");$("#kd125").text("Sexual fluids, often generated from one's orgasm.");
$("#kn126").text("Cum Bath");$("#kd126").text("The act of being treated physically with cum (typically in large amounts) such as having it rubbed into one's skin or fur, or literally bathing in it, or having one's semen used in such ways.");
$("#kn127").text("Cum Enemas");$("#kd127").text("The act of performing an enema, the liquid being used in such being semen, or receiving such actions, often by means of an orgasm.");
$("#kn128").text("Cum From Mouth / Nose");$("#kd128").text("The act of ejaculating with such force and / or by such a volume that the cum leaks and / or sprays from a characters mouth and / or nose, or receiving such actions.");
$("#kn129").text("Cum Inflation (Heavy / Extreme)");$("#kd129").text("Engaging in an RP in which at least one character is filled with an impossible amount of semen, typically directly from the penis due to anal, vaginal or oral sex, causing their stomach and / or body to expand to fantastical sizes.");
$("#kn130").text("Cum Inflation (Light / Medium)");$("#kd130").text("Engaging in an RP in which at least one character is filled with a massive amount of semen, typically directly from the penis due to anal, vaginal or oral sex, causing their stomach and / or body to bulge or become somewhat round.");
$("#kn131").text("Cum Marking");$("#kd131").text("The act of cumming onto a bottom or submissive with the intent for the scent or sight of the cum to work as a proprietary mark, sometimes for extended or permanent periods of time, or receiving such actions.");
$("#kn132").text("Cum Milking");$("#kd132").text("The act of collecting or milking the semen from at least one partner, typically done through manual or mechanical stimulation to the penis, or using stored semen as a sexual toy in an RP. Often involves machines and apparati.");
$("#kn133").text("Cum on Clothes");$("#kd133").text("The act of ejaculating onto clothing or wearing clothing that has been ejaculated on, often in public and / or for extended periods of time.");
$("#kn134").text("Cum Popping");$("#kd134").text("Popping caused by cum-inflation. May or not suggest gore. Often implied to be cartoony or non-gory in which all that is left behind is semen.");
$("#kn135").text("Cum Vomit");$("#kd135").text("The act of, or interest in, vomiting cum that has been recently ingested, typically in copious amounts but not necessarily.");
$("#kn136").text("Cumversion");$("#kd136").text("The act of transforming or melting a recipient into semen. Also referred to as cum transformation, cum digestion and cummification.");
$("#kn137").text("Cunnilingus (Giving)");$("#kd137").text("The act of performing cunnilingus -- oral sex on a character's vagina.");
$("#kn138").text("Cunnilingus (Receiving)");$("#kd138").text("The act of receiving cunnilingus -- oral sex on a character's vagina.");
$("#kn139").text("Cuntboys");$("#kd139").text("Expresses an interest in male characters who have a vagina instead of typically male genitals.");
$("#kn140").text("Cut Cocks");$("#kd140").text("Expresses an interest in circumcised penises.");
$("#kn141").text("Dating");$("#kd141").text("Engaging in an RP where characters go on a date.");
$("#kn142").text("Death");$("#kd142").text("A situation in which a character will die at any point by any means.");
$("#kn143").text("Degradation");$("#kd143").text("A situation where one character will be purposefully degraded, usually as a means of lowering their self worth; typically in the context of guilt or BDSM.");
$("#kn144").text("Demons");$("#kd144").text("Demons or devils, typically magical. May also include other, fantastical creatures, such as but not limited to Incubi, Succubi, and fiends.");
$("#kn145").text("Diapers");$("#kd145").text("A situation in which at least one character will wear a diaper. May imply 'soiling usage' of the diaper, but not necessarily. Often related with ageplay or infantilism, but sometimes in conjunction with humiliation.");
$("#kn146").text("Digestion");$("#kd146").text("Engaging in a vore-related RP in which the prey character will be digested in whatever fluid(s) are applicable.");
$("#kn147").text("Digimon");$("#kd147").text("Characters from the manga and television show 'Digimon',");
$("#kn148").text("Dinosaurs");$("#kd148").text("Prehistoric species such as tyrannosaurus rex, triceratops, raptors, apatosaurus, etc.");
$("#kn149").text("Dirty Feet");$("#kd149").text("Expresses an interest in feet that are deemed 'unclean,' usually through sweat, dirt, or a buildup of grime.");
$("#kn150").text("Dirty Talking");$("#kd150").text("The act of speaking in a typically explicit manner to provoke sexual stimulation from a participant, sometimes one's self; often in the context of seduction or foreplay.");
$("#kn151").text("Disabilities");$("#kd151").text("Expresses an interest in characters with disabilities in some way, such as deafness, blindness, paraplegia, or other impairments that may be cognitive, developmental, intellectual, mental, physical, sensory, or some combination of these.");
$("#kn152").text("Discipline / Reinforcement");$("#kd152").text("The use of reinforcement (rewards and / or punishments) in order to train a submissive to obey the various commands of a master.");
$("#kn153").text("Disposal");$("#kd153").text("Engaging in a vore-related RP in which the prey will be consumed, digested and released as fecal matter and / or urine.");
$("#kn154").text("Divinities");$("#kd154").text("Gods, goddesses, demi-gods and demi-goddesses of all sorts, ranging from those barely more powerful than a mortal to the nearly omnipotent.");
$("#kn155").text("Docking");$("#kd155").text("Phallic insertion into another person's sheath and / or foreskin.");
$("#kn156").text("Dollification");$("#kd156").text("Transforming the recipient into a doll of any kind. Most usually a sex doll. ");
$("#kn157").text("Double Penetration");$("#kd157").text("The act of penetrating a single character with two objects, including but not limited to the penis, sex toys, fist etc., or receiving such.");
$("#kn158").text("Dragons");$("#kd158").text("Dragons, drakes, wyverns, etc.");
$("#kn159").text("Drawn Image References");$("#kd159").text("Expresses an interest in character profiles that use drawn / art images for visual references for their character.");
$("#kn160").text("Driders");$("#kd160").text("Describes a kind of species that is a combination of human and spider. Usually, their anatomy consists of a (mostly) humanoid upper body seated on top of the body of a spider. It may refer to hybrids with mostly humanoid or arachnid features as well.");
$("#kn161").text("Dronification");$("#kd161").text("The act of taking a character and forcing them though physical and mental changes to conform to a template. Often suggests brainwashing or reprogramming and servitude to a particular master.");
$("#kn162").text("Drug / Alcohol Use");$("#kd162").text("The use of illicit drugs and / or alcohol in the context of an RP.");
$("#kn163").text("Dub-Consensual");$("#kd163").text("Denotes sexual situations of 'dubious consent,' where the receiver is either unwanting or uncertain, but struggles with the personal unsure conflict of secretly enjoying it.");
$("#kn164").text("Ear Play");$("#kd164").text("Interest in roleplay where ears play an important role. This can involve suckling, caressing, breathing / whispering into, pulling them, or any other kind of interaction focusing on the ears.");
$("#kn165").text("Electric Toys");$("#kd165").text("The use of sex toys that carry an electrical current; sometimes painful.");
$("#kn166").text("Elves");$("#kd166").text("Humanoid individuals characterized by long pointed ears and typically containing fantasy elements.");
$("#kn167").text("Emasculation");$("#kd167").text("The act whereby the genitalia are removed by magical or surgical means, usually the penis and / or the testicles. May also imply humiliation; e.g. to render a male less of a man.");
$("#kn168").text("Endosoma");$("#kd168").text("Vore that focuses on the ‘safe’ containment within the predator. Does not necessarily mean the prey is willing or comfortable. ");
$("#kn169").text("Enemas");$("#kd169").text("The application of a liquid, typically warm water or a body fluid, to the intestines of a character, often to clean them out, but sometimes as a form of discipline or sexual gratification, or receiving such actions; might imply a form of administration other than phallic penetration.");
$("#kn170").text("Equines");$("#kd170").text("Horses, donkeys, mules, zebra, centauri etc.");
$("#kn171").text("Excessive Precum");$("#kd171").text("Engaging in an RP in which a character produces a larger than average amount of precum; typically unrealistic.");
$("#kn172").text("Excessive Semen");$("#kd172").text("Engaging in an RP in which a character produces a larger than average amount of semen; typically unrealistic.");
$("#kn173").text("Execution / Murder");$("#kd173").text("The act of actively causing death to a character that is not accidental. Implies committing lethal acts on a character that is intended to result in their end, or being the receiver of such actions.");
$("#kn174").text("Exhibitionism");$("#kd174").text("Engaging in some kind of play where one or both parties will be caught, spotted, or otherwise observed by a third party or parties, adding to the thrill (and / or humiliation).");
$("#kn175").text("Exotic Cocks");$("#kd175").text("Expresses an interest in unusually shaped or accessorized penises.");
$("#kn176").text("Exotic Digestion");$("#kd176").text("Digestion methods in vore that happen differently to that of a human being and may be considered impossible or magical.");
$("#kn177").text("Exotic Species");$("#kd177").text("Expresses an interest for uncommon, hybrid or otherwise exotic choices in species.");
$("#kn178").text("Extreme Humiliation");$("#kd178").text("Engaging in an RP in which one character will purposefully be humiliated to the point (or attempted point) of intense, mental anguish and total loss of self-worth through sexual interaction; typically implies exceptional or devastating, psychological damage.");
$("#kn179").text("Extreme Musk");$("#kd179").text("Engaging in an RP in which one character exudes exceptionally strong odors from the body, such as but not limited to odor from the crotch, foreskin, feet or armpit to degrees that are typically realistic and / or derived from excessive lack of hygiene.");
$("#kn180").text("Extreme Pregnancy");$("#kd180").text("The act of becoming pregnant with an incredible or unrealistic size and / or number of fetuses / eggs, often in an unrealistically short time span, and often to the point of immobility, or engaging in an RP in which at least one character fits such a description.");
$("#kn181").text("Extreme Tightness");$("#kd181").text("Engaging in an RP in which at least one character exhibits exceptional tightness in their anus, vagina, or throat; sometimes implies pain, exceptionally large penetrations and / or inexperience.");
$("#kn182").text("Face Slapping");$("#kd182").text("Slaps to the face, of any degree or severity.");
$("#kn183").text("Face-Fucking");$("#kd183").text("Refers to the act of penetrating the mouth of another character with a similar technique as fucking a vagina or anus, typically by bracing the mouth or skull and thrusting back and forth; often rough.");
$("#kn184").text("Face-Sitting");$("#kd184").text("A sexual practice where someone sits on another character's face with their buttocks or genitals, causing the person to be smothered, sometimes to the point of asphyxiation; often done as a form of forcing oral gratification.");
$("#kn185").text("Facial Hair / Beards");$("#kd185").text("Expresses an interest in characters sporting facial hair in some manner, which can extend anywhere from scruffy stubble to full beards.");
$("#kn186").text("Fae");$("#kd186").text("Beings of the mythical and supernatural variety, generally consisting of things such as fairies, imps, spirits, elementals, etc.");
$("#kn187").text("Fangs / Sharp Teeth");$("#kd187").text("Expresses an interest in having or playing with a character that has sharp pointed fangs and/or teeth.");
$("#kn188").text("Fantasy");$("#kd188").text("Themes consisting of the fantasy genre, involving magic or other supernatural elements as a main plot element, theme, or setting. Magic and magical creatures are commonly incorporated.");
$("#kn189").text("Farting");$("#kd189").text("Farting, during sexual intercourse, or just as an act during the roleplay. May be exaggerated (visible expulsions of air) and / or with exaggerated flatulent noises, but not necessarily.");
$("#kn190").text("Fat Play");$("#kd190").text("Play that revolves around a character's body fat in one form or another. Typically in regions such as the belly, ass, chest, thighs, etc.");
$("#kn191").text("Fatality (Vore)");$("#kd191").text("A form of snuff which occurs as a direct result of vore, intentional or otherwise. ");
$("#kn192").text("Fear");$("#kd192").text("Refers to the incorporation of one or more character(s) having reason to be fearful during the sexual (or even nonsexual) aspects of an RP.");
$("#kn193").text("Felching");$("#kd193").text("The act of orally sucking semen out of a partner's anus or vagina.");
$("#kn194").text("Felines");$("#kd194").text("Domesticated cats, jaguars, lions, tigers, cheetahs etc.");
$("#kn195").text("Fellatio (Performing)");$("#kd195").text("The act of performing fellatio -- oral sex on a character's penis.");
$("#kn196").text("Fellatio (Receiving)");$("#kd196").text("The act of receiving fellatio -- oral sex on a character's penis.");
$("#kn197").text("Females");$("#kd197").text("Expresses an interest in traditionally female characters.");
$("#kn198").text("Femboys");$("#kd198").text("Effeminate, girly males.");
$("#kn199").text("Femdom");$("#kd199").text("Play in which a character of female gender takes the role of dominant, maintaining control and authority; being considered the focal point of the dynamic. It is defined as an exchange founded on her needs, pleasures, and desires, with the submissive's purpose to provide service to her first and foremost.");
$("#kn200").text("Femininity");$("#kd200").text("An interest in characters that tend to be traditionally feminine in appearance and / or personality.");
$("#kn201").text("Fighting / Wrestling");$("#kd201").text("The act of physically sparring, either with malice or more playfully, with another character in an RP; typically non-sexual, although sometimes with the intent to pin the bottom or submissive in order to penetrate them.");
$("#kn202").text("Filth");$("#kd202").text("Expresses an interest in the inclusion of dirtiness and uncleanly aspects such as foul odors, trash, or any other form of physical matter that is considered unsanitary or disgusting.");
$("#kn203").text("Fingering (Anal)");$("#kd203").text("The act of using one's fingers to stimulate another character anally, or receiving such actions, in order to induce sexual pleasure.");
$("#kn204").text("Fingering (Vaginal)");$("#kd204").text("The act of using one's fingers to stimulate another's vagina, or receiving such actions, in order to induce sexual pleasure, commonly resulting in orgasm.");
$("#kn205").text("Fingers in Mouth");$("#kd205").text("Expresses an interest in play that involves inserting fingers in one's mouth. Often implies sucking, licking, feeling out one's mouth in an exploratory fashion, or possibly inserting something into it.");
$("#kn206").text("Fish / Sharks");$("#kd206").text("Gill-bearing aquatic animals such Great Whites, Tiger sharks, Whale sharks, and various types of fish.");
$("#kn207").text("Flaccid Play");$("#kd207").text("Expresses an interest in play that involves a character's penis being flaccid. May involve handjobs or oral sex while flaccid, or attempting penetration in such a state.");
$("#kn208").text("Fleshcrafting");$("#kd208").text("The term used to describe a subset of transformations in which a character is shaped and moulded in scene. Changes can range from subtle size adjustments to a drastic restructuring of the body.");
$("#kn209").text("Flexibility / Contortionism");$("#kd209").text("Exceptional or unrealistic flexibility, typically used to achieve extremely difficult or impossible sexual positions to derive maximum stimulation.");
$("#kn210").text("Flogging / Whipping");$("#kd210").text("The use of toys being employed against another character, particularly referring to contact play involving whips of any type, riding crops, paddles, or flogs.");
$("#kn211").text("Food (Vore)");$("#kd211").text("Incorporating conventional food into vore scenes. Such as seasoning prey or incorporating them as an ingredient in a meal or dessert. ");
$("#kn212").text("Food Play");$("#kd212").text("The act of incorporating food into the sexual context of an RP, or which may include (but is not limited to) use of whipped cream or chocolate sauce in a sexual act, receiving sexual gratification from the act of eating, or including rather large amounts of food (but not necessarily).");
$("#kn213").text("Foot Play");$("#kd213").text("The act of incorporating the feet or feet paws into the sexual context of an RP, including but not limited to the worshiping of feet, receiving sexual gratification from the sight or feel of feet and / or humping feet, sometimes to the point of orgasm.");
$("#kn214").text("Footgear Worship");$("#kd214").text("The act of giving gratuitous acknowledgment to the shoes or boots of one's partner, typically referring to oral play, often to clean or shine the exterior of the shoes or boots, or musk play, when regarding the interior of the shoes or boots.");
$("#kn215").text("Footjobs");$("#kd215").text("A sexual practice that involves one's feet being rubbed on a partner in order to induce sexual excitement, stimulation, or orgasm.");
$("#kn216").text("Force Feeding");$("#kd216").text("Engaging in an RP in which a character, typically bound or otherwise immobile, is forced to consume large, often impossible and unrealistic, amounts of food against their will, often resulting in inflation and / or weight gain.");
$("#kn217").text("Forced Clotheswearing");$("#kd217").text("The act of either forcing a character to wear or being forced to wear specific garments of clothing of the other character's choosing; often humiliating.");
$("#kn218").text("Forced Growth");$("#kd218").text("Expresses an interest in which at least one character will be forced to endure themselves, or any part(s) of their body, growing against their will.");
$("#kn219").text("Forced Incest");$("#kd219").text("Engaging in an RP in which a character is forced to have sex with a character who is related to them, either by blood or marriage.");
$("#kn220").text("Forced Nudity");$("#kd220").text("The act of either forcing a character to be nude or being forced to be nude by another character; typically used in public situations.");
$("#kn221").text("Foreplay");$("#kd221").text("Sexual activity that precedes intercourse, incorporating various forms of erotic build up before the actual act of sex.");
$("#kn222").text("Foreskin Worship");$("#kd222").text("Gratuitous acknowledgment of one's partner's foreskin, either verbal and / or physical, or receiving such actions; typically implies oral stimulation.");
$("#kn223").text("Frotting");$("#kd223").text("The act of at least two penises being ground against each other for sexual gratification.");
$("#kn224").text("Fucked Braindead");$("#kd224").text("A variation of the conventional 'fucked silly' or 'ahegao' in which the effect is so drastic that the effected character undergoes significant and permanent mental changes, ending in a vegetative state.");
$("#kn225").text("Gags");$("#kd225").text("The act of placing and lodging an object in another character's mouth to force them to breathe through their nose, as well as creating the inability to speak, or receiving such actions.");
$("#kn226").text("Game Rules");$("#kd226").text("Expresses an interest in game mechanics or rules being implemented into a roleplay. Such as utilizing dice rolls to determine the success or failure of certain actions within the roleplay. ");
$("#kn227").text("Gangbangs");$("#kd227").text("A situation in which several people engage in physical sexual activity with one particular character sequentially or at the same time.");
$("#kn228").text("Gaping (Anal)");$("#kd228").text("Stretching the anus during penetration, to the point that it stays open for a period of time.");
$("#kn229").text("Gaping (Vaginal)");$("#kd229").text("Stretching the vagina during penetration, to the point that it stays open for a period of time.");
$("#kn230").text("Gender Transformation");$("#kd230").text("Transforming a character into another gender by various means, which may or may not include their sex. Encompasses both magical and sci-fi changes, as well as more realistic gender reassignment.");
$("#kn231").text("Genital / Nipple Piercings");$("#kd231").text("Engaging in an RP in which at least one character has piercings that are located on the nipples or sexual areas of the body; typically cock or labia piercings.");
$("#kn232").text("Genital Torture");$("#kd232").text("Engaging in an RP in which at least one character's genitals will be given negative attention, the intent of which to be to cause physical pain.");
$("#kn233").text("Gentle");$("#kd233").text("The involvement of gentle behaviour and actions (typically during sex) upon a partner. Usually denotes calm, non-forceful actions, or at most coaxing the partner into non or dub-consensual acts.");
$("#kn234").text("Glasses");$("#kd234").text("A preference for characters who wear glasses.");
$("#kn235").text("Gore");$("#kd235").text("The involvement of graphic violence and carnage, generally of serious physical injuries involving blood, flesh, bone, and internal organs.");
$("#kn236").text("Grab and Gulp (Vore)");$("#kd236").text("Expresses an interest in vore scenes which are brief and have little-to-no build up to the act of consumption. Often begin in medias res and may not have a plot or a setting. ");
$("#kn237").text("Group Roleplay");$("#kd237").text("Expresses and interest in a roleplay that involves more than two players. ");
$("#kn238").text("Growth");$("#kd238").text("Growing in body size by magical, medicinal, or otherwise fantastic means.");
$("#kn239").text("Growth (Macro)");$("#kd239").text("Growing in body size to heights in vast excess, often to seemingly impossible sizes.");
$("#kn240").text("Hair Pulling");$("#kd240").text("The act of pulling or tugging on another character's hair, or being the recipient of such.");
$("#kn241").text("Hammerspace (Vore)");$("#kd241").text("A space which is larger on the inside. In vore, this implies that the prey are barely or not at all visible from outside the predator. ");
$("#kn242").text("Hand Cuffs");$("#kd242").text("The use of hand cuffs to partially immobilize a character during an RP, or to restrain a character to an object.");
$("#kn243").text("Hand Play");$("#kd243").text("Play that revolves around the hands.");
$("#kn244").text("Handjobs");$("#kd244").text("The act of using one's hand to stimulate another's cock, or receiving such actions, in order to induce sexual pleasure, commonly resulting in orgasm.");
$("#kn245").text("Hard Cum Facials");$("#kd245").text("The act of cumming onto someone's face with no regard for that person's well-being, typically cumming into their ears, onto their eyes, into their nostrils or hair etc., or receiving such action; implies an exceptionally large amount of semen.");
$("#kn246").text("Hard Vore");$("#kd246").text("Engaging in vore in which the prey character is chewed and / or eaten piece by piece, or otherwise physically mutilated by the act of being consumed.");
$("#kn247").text("Heat / Rut");$("#kd247").text("A character entering a state of heightened sexual arousal which often alters or overrides their inhibitions. May correspond with being more receptive to impregnation / the ability to impregnate.");
$("#kn248").text("Heavily Excessive Precum");$("#kd248").text("Engaging in an RP in which a character, typically unrealistically endowed, produces exceptionally large volumes of precum, including but not limited to multiple gallons, and / or looses precum with exceptional force and consistency, often to the point of being comparable to urinating or further.");
$("#kn249").text("Heavily Excessive Semen");$("#kd249").text("Engaging in an RP in which a character, typically unrealistically endowed, produces exceptionally large volumes of semen, including but not limited to multiple gallons, and / or looses semen with exceptional force and consistency, often to the point of being comparable to urinating or further.");
$("#kn250").text("Heavy / Extreme Bondage");$("#kd250").text("The use of bondage that is extreme in either the position in which it causes the bound character to be in, the duration for which the character will be in bondage, the level of discomfort caused by the bondage or the amount of immobilization that will occur due to the bondage.");
$("#kn251").text("Hermaphrodites");$("#kd251").text("Expresses an interest in female-identifying characters that have breasts, a penis, and a vagina.");
$("#kn252").text("Hirsute");$("#kd252").text("Refers to the preference for characters with excessive or pronounced hair; typically involves character that would otherwise not have hair to have hair, or for furry characters to have additional hair in areas such as but not limited to the pubis, armpits and chin, and often implies a denser or more wiry texture of hair.");
$("#kn253").text("Horns");$("#kd253").text("A preference for characters that possess horns, regardless of the appropriateness of horns to the character's species.");
$("#kn254").text("Horror");$("#kd254").text("Themes consisting of the horror genre, incorporating aspects that are considered creepy, macabre, scary, or unsettling (typically to elicit a physiological reaction) as a main plot element, theme, or setting.");
$("#kn255").text("Hotdogging");$("#kd255").text("The act of placing a penis between the ass cheeks and pressing them against it, sliding it between them in order to reach sexual satisfaction.");
$("#kn256").text("Human Cocks");$("#kd256").text("Expresses an interest in characters that have human shaped penises.");
$("#kn257").text("Humanoids");$("#kd257").text("Characters that have a humanoid shape but are not human. Examples may consist of various races such as satyrs, gnomes, dwarves, halflings, tieflings, etc.");
$("#kn258").text("Humans");$("#kd258").text("Characters that are purely human, generally realistic, and generally contain no fantasy or supernatural elements (but not necessarily).");
$("#kn259").text("Humiliation");$("#kd259").text("Engaging in an RP in which one character will be embarrassed, typically extremely and / or frequently, in an attempt to elicit either a response of sexual gratification from the emotions correlating to humiliation, or merely as a form of psychological domination or punishment; typically a more intense form of degradation.");
$("#kn260").text("Humor / Comedy");$("#kd260").text("Expresses an interest in the inclusion of humorous dialogue, settings, or situations.");
$("#kn261").text("Hyaenidae");$("#kd261").text("Hyenas!");
$("#kn262").text("Hyper Asses");$("#kd262").text("Expresses an interest in asses that are incredibly large and disproportional to their body size.");
$("#kn263").text("Hyper Balls");$("#kd263").text("Expresses an interest in balls that are exceptionally large.");
$("#kn264").text("Hyper Breasts");$("#kd264").text("Expresses an interest in breasts that are incredibly disproportionate to their body size.");
$("#kn265").text("Hyper Cocks");$("#kd265").text("Expresses an interest in large penises incredibly disproportionate to their body size.");
$("#kn266").text("Hyper Disposal");$("#kd266").text("Post Vore Disposal that is of excessive quantity or size. May suggest multiple meals or an excessive amount from a single meal.");
$("#kn267").text("Hyper Fat");$("#kd267").text("Expresses an interest in characters that are impossibly obese.");
$("#kn268").text("Hyper Lactation");$("#kd268").text("Expresses an interest in lactation that is exceptionally excessive and in unrealistic proportions.");
$("#kn269").text("Hyper Muscle");$("#kd269").text("Expresses an interest in characters that have an impossibly muscular physique.");
$("#kn270").text("Hyper Muscle Growth");$("#kd270").text("Increasing the size or strength of one's muscles to excessive or impossible degrees.");
$("#kn271").text("Hyper Scat");$("#kd271").text("Producing unnatural amounts of feces, or using other means to obtain feces in huge, often unrealistic, amounts within an RP, the excretion of product thereof causing sexual stimulation and / or distress to one or more characters.");
$("#kn272").text("Hyper Vaginas");$("#kd272").text("Expresses an interest in vaginas that are exceptionally large, or with unrealistic proportions.");
$("#kn273").text("Hyper Watersports");$("#kd273").text("Producing unnatural amounts of urine, or using other means to obtain urine in huge, often unrealistic, amounts within an RP, the excretion of product thereof causing sexual stimulation and / or distress to one or more characters.");
$("#kn274").text("Hyper-Voluptuous");$("#kd274").text("Expresses an interest in characters that have unrealistically large hips and buttocks.");
$("#kn275").text("Hypnotism / Mind Control");$("#kd275").text("Engaging in an RP in which one character will mentally and / or supernaturally take control of another character's mind and / or body through psychic means or hypnotic means, sometimes through the use of supernatural or magical powers.");
$("#kn276").text("Ice");$("#kd276").text("The use of ice in any fashion during sex, typically as a form of erotic foreplay.");
$("#kn277").text("Immobilization (Bondage)");$("#kd277").text("Engaging in an RP in which at least one character will be physically immobilized, typical by heavy bondage or mummification from BDSM, but may be from other methods like entrapment or suppression.");
$("#kn278").text("Immobilization (Size)");$("#kd278").text("Engaging in an RP in which at least one character will be rendered immobile due to a variety of reasons, typically due to some form of bodily growth. May be a result of extremer forms weight gain, inflation, or a part of their body growing to impeccable sizes such as their breasts, cock, ass, or muscles that result in them becoming encumbered.");
$("#kn279").text("Impalement");$("#kd279").text("Describes a character being pierced by an object, and subsequently having it extend out and through an exit wound. Typically implies pain, torture, and is often fatal.");
$("#kn280").text("Impotence");$("#kd280").text("Expresses an interest in characters that are unable to achieve an erection (or arousal) without, or even with, help.");
$("#kn281").text("Impregnation");$("#kd281").text("Expresses an interest in actions where impregnating a character is the focused act, actively trying to get another character pregnant in one form or another.");
$("#kn282").text("In Medias Res");$("#kd282").text("Expresses and interest in roleplays that start at the moment of interest or main action. Often implies that the initial meeting of characters has been skipped, but not always. ");
$("#kn283").text("Inanimate Object Transformation");$("#kd283").text("Transforming a character into an object of sorts (a chair, clothing, a toy, etc.), may be done through a variety of means.");
$("#kn284").text("Incest");$("#kd284").text("Engaging in an RP in which at least two characters will be related, either by blood or by marriage.");
$("#kn285").text("Incest (Parental)");$("#kd285").text("Involves relationships where the characters are blood related in terms of being parent and child.");
$("#kn286").text("Incest (Siblings)");$("#kd286").text("Involves relationships where the characters are blood related in terms of being siblings.");
$("#kn287").text("Inexperienced Partners");$("#kd287").text("Refers to players whose characters are sexually inexperienced and / or naive (typically younger or virgin characters), or an interest in RPing with such characters; does not refer to the RPing capabilities of the player.");
$("#kn288").text("Infantilism");$("#kd288").text("A scenario in which a character (be they adult or otherwise) will be treated as if they are exceptionally young; typically implies diaper wearing and / or diaper usage. Tends to include rather infantile themes and aspects.");
$("#kn289").text("Inflatables");$("#kd289").text("An expressed interest in characters (or objects) that are inflatable in nature, such as balloons, pool toys, or characters / objects compiled of elastic material meant to be expanded.");
$("#kn290").text("Inflation (Heavy / Extreme)");$("#kd290").text("Engaging in an RP in which at least one character is filled with an impossible amount of a substance other than a bodily fluid, typically a gas or liquid, causing their stomach and / or body to expand to fantastical sizes.");
$("#kn291").text("Inflation (Light / Medium)");$("#kd291").text("Engaging in an RP in which at least one character is filled with a massive amount of a substance other than a bodily fluid, typically a gas or liquid, causing their stomach and / or body to bulge or become somewhat round.");
$("#kn292").text("Informality");$("#kd292").text("Treating sexual acts, having explicit dialogue or reacting to predetermined kinks casually, or as if they were normal in their setting.");
$("#kn293").text("Insects / Arachnids");$("#kd293").text("Bees, wasps, spiders, scorpions, ants etc.");
$("#kn294").text("Instant Digestion / Absorption");$("#kd294").text("Digestion or absorption that happens in less than a few seconds. Often implies the process is at the will or whim of the predator, or as a result of other processes from the predator reaching climax. ");
$("#kn295").text("Instant Hookups");$("#kd295").text("An in-character meeting between one or more characters that more often than not will lead to sudden intercourse without much thought prior to it.");
$("#kn296").text("Instant Loss");$("#kd296").text("The name given to a sequence of events in which a confident character or hero will initiate a fight, but is instantly defeated and sexually penetrated. Often being mentally broken, impregnated or over-stimulated.");
$("#kn297").text("Intelligent Characters");$("#kd297").text("Exhibits a preference for characters that have particularly high levels of intelligence, wit, cunning and manipulation skills.");
$("#kn298").text("Intercrural Sex");$("#kd298").text("A form of non-penetrative sex done by inserting a cock between one's thighs in order to achieve orgasm.");
$("#kn299").text("Internal Cumshots");$("#kd299").text("The act of ejaculating into another's body, or receiving such actions.");
$("#kn300").text("Interracial");$("#kd300").text("Romantic / sexual interaction between or involving different races.");
$("#kn301").text("Juiceboxing");$("#kd301").text("Draining the fluids or life force of a character. Suggests significant negative physical changes that can result in death, and the character becoming shrivelled/desiccated corpse.");
$("#kn302").text("Kemonomimi");$("#kd302").text("Characters with animal ears, a tail, or other animal characteristics on an otherwise human body. Sometimes reffered to as demi.");
$("#kn303").text("Kidnapping");$("#kd303").text("The act of abducting a character in an RP, (typically for the purpose of abusing, usually sexually, but not necessarily) or being abducted for such reasons; often implies indefinite imprisonment.");
$("#kn304").text("Kissing");$("#kd304").text("Expresses an interest in kissing or being kissed by another character, typically denoting French kissing.");
$("#kn305").text("Knotted Cocks");$("#kd305").text("Expresses an interest in penises with a knot.");
$("#kn306").text("Knotting / Tying");$("#kd306").text("The act of lodging the knot of a penis, typical of canine anatomy, into an orifice to 'tie' with your partner.");
$("#kn307").text("Lactation");$("#kd307").text("The act of producing milk from one's breasts, or engaging in sex with a character that produces milk from one's breasts, typically in response to sexual stimulation, and any play that will emanate thereof.");
$("#kn308").text("Lamia / Naga");$("#kd308").text("Characters with lower bodies (typically serpentine) that do not possess legs, with their lower extremities being more akin to a snake, eel, worm, fish, or similar.");
$("#kn309").text("Lapines");$("#kd309").text("Bunnies, rabbits, hares etc.");
$("#kn310").text("Large Asses");$("#kd310").text("Expresses an interest in exceptionally large asses.");
$("#kn311").text("Large Balls");$("#kd311").text("Expresses an interest in balls that are large.");
$("#kn312").text("Large Breasts");$("#kd312").text("Expresses an interest in exceptionally large breasts.");
$("#kn313").text("Large Cocks");$("#kd313").text("Expresses an interest in exceptionally large cocks.");
$("#kn314").text("Large Tails");$("#kd314").text("Expresses an interest in exceptionally large or dense tails.");
$("#kn315").text("Latex / Rubber");$("#kd315").text("The usage of latex and / or rubber material worn as clothing and / or used as a form of mummification / bondage; typically full body suits.");
$("#kn316").text("Leash & Collar");$("#kd316").text("Engaging in an RP in which a character will be adorned with a collar that will be attached to a leash.");
$("#kn317").text("Leather");$("#kd317").text("The use of leather, often in a bondage situation; typically includes leather garments or equipment associated with dominants, as well as harness gear.");
$("#kn318").text("Lengthy Digestion / Absorption");$("#kd318").text("Digestion or absorption that happens in an extended timeframe. Generally being more than a few hours, but sometimes can extend as far as days, months or years. ");
$("#kn319").text("Licking");$("#kd319").text("The act of one character licking another. May or may not be sexual.");
$("#kn320").text("Life Drain");$("#kd320").text("The act of draining or feeding of the life 'essence' of a character. Usually suggests physical or mental changes as a result of the loss of 'life'.");
$("#kn321").text("Light / Medium Bondage");$("#kd321").text("The use of bondage that is mild or moderate in either the position in which it causes the bound character to be in, the duration for which the character will be in bondage, the level of discomfort caused by the bondage or the amount of immobilization that will occur due to the bondage.");
$("#kn322").text("Lima Syndrome");$("#kd322").text("The act of a character that is an abductor developing sympathy for their captives, trusting and / or displaying affection for their captive / victim.");
$("#kn323").text("Living Insertions");$("#kd323").text("The act of inserting an animate object(s) into an orifice, or receiving such action; typically worms, insects, or alien creatures.");
$("#kn324").text("Lycanthropes");$("#kd324").text("A character with the ability and/or condition to transform into an animal or particular non-human beast (generally an anthropomorphic animal or animal-like creature). Examples of such would be werewolves, werecats, and all forms of general werebeasts.");
$("#kn325").text("Macro Asses");$("#kd325").text("Expresses an interest in impossibly large asses that are incredibly disproportionate to their body size.");
$("#kn326").text("Macro Balls");$("#kd326").text("Expresses an interest in balls that are larger than their owner, with or without being proportionate to the owner's penis.");
$("#kn327").text("Macro Breasts");$("#kd327").text("Expresses an interest in impossibly large breasts that are incredibly disproportionate to their body size.");
$("#kn328").text("Macro Cocks");$("#kd328").text("Expresses an interest in penises that are taller and / or wider than its owner.");
$("#kn329").text("Macrophilia");$("#kd329").text("Expresses an interest in characters that are incredibly and unrealistically tall.");
$("#kn330").text("Magic Users");$("#kd330").text("RPs involving characters that are capable of performing magical or supernatural feats that may or may not be sexual in nature.");
$("#kn331").text("Male Pregnancy");$("#kd331").text("The act of a male identifying character becoming pregnant during the course of an RP, or engaging in an RP in which at least one male character is pregnant.");
$("#kn332").text("Male-Herms");$("#kd332").text("Expresses an interest in male-identifying characters that have a penis and a vagina.");
$("#kn333").text("Males");$("#kd333").text("Expresses an interest in traditionally male characters.");
$("#kn334").text("Mammals");$("#kd334").text("Any character belonging to the Mammalia class.");
$("#kn335").text("Marine Mammals");$("#kd335").text("Whales, dolphins, etc.");
$("#kn336").text("Marking");$("#kd336").text("The act of urinating on another character in order to mark them with your proprietary scent of urine, or being the recipient of such actions.");
$("#kn337").text("Marsupials");$("#kd337").text("Kangaroos, koala, possums, wombats etc.");
$("#kn338").text("Masculinity");$("#kd338").text("An interest in characters that tend to be traditionally masculine in appearance and / or personality.");
$("#kn339").text("Masks");$("#kd339").text("The use of masks (surgical, BDSM, gas masks, etc), typically to conceal the wearer's identity, in an RP scene.");
$("#kn340").text("Massages");$("#kd340").text("The act of treating the body by rubbing, kneading, patting, or similar in order to stimulate circulation, increase suppleness, relieve tension, or pamper an individual.");
$("#kn341").text("Master / Pet");$("#kd341").text("Engaging in an RP in which a domination / submission relationship is played between at least two characters, and in which the bottom character takes on the role of a pet; typically a training-based scenario with positive reinforcement over negative reinforcement, as well as the inclusion of affection.");
$("#kn342").text("Master / Slave");$("#kd342").text("Engaging in an RP in which a domination / submission relationship is played between at least two characters, and in which the bottom character takes on the role of a slave; typically requires the slave to accept any and all commands, often involves non-sexual forms of abuse and uses negative reinforcement.");
$("#kn343").text("Masturbation");$("#kd343").text("The act of stimulating oneself sexually, usually utilizing physical contact from the hands or fingers to the genitals.");
$("#kn344").text("Medical Play");$("#kd344").text("Engaging in an RP set in a medical setting, such as a hospital, or an RP involving aspects of medicine, such as injections, medical equipment, uniforms or medical experiments or procedures.");
$("#kn345").text("Mega Macro");$("#kd345").text("Expresses an interest in characters that are at least one mile tall.");
$("#kn346").text("Menses");$("#kd346").text("Engaging in an RP in which menstruation will be involved, or applied to the sexual context of a scene.");
$("#kn347").text("Mental Torture");$("#kd347").text("An expressed interest in scenes that involve torture that is psychological in nature, typically involving themes of fear, paranoia, insanity, mental abuse, and so on.");
$("#kn348").text("Mephitis");$("#kd348").text("Skunks, basically!");
$("#kn349").text("Messy");$("#kd349").text("Engaging in an RP that may involve excessive amounts of liquids (which may be bodily fluids) or other solutions such as (but not limited to) mud, food, slime, etc.");
$("#kn350").text("Microphilia");$("#kd350").text("Expresses an interest in characters that are impossibly and unrealistically small.");
$("#kn351").text("Military Themes");$("#kd351").text("Expresses an interest in scenes, settings, and themes that incorporate military aspects. Implies concepts such as war, weapon involvement, uniforms, rank, and more. All of which may be historical, fantasy, scifi or otherwise.");
$("#kn352").text("Modern Settings");$("#kd352").text("Themes consisting of the modern aspects, taking place in current times. Often implies up to date technology and culture.");
$("#kn353").text("Mollusca");$("#kd353").text("Slugs, snails, oysters, squids, octopuses, etc.");
$("#kn354").text("Monkeys / Primates");$("#kd354").text("Apes, monkeys, chimps, gorillas, etc.");
$("#kn355").text("Monsters");$("#kd355").text("Various types of monsters and aesthetically challenging characters.");
$("#kn356").text("Moobs");$("#kd356").text("Expresses an interest in male identifying characters that have significant breast tissue, typically known as gynecomastia.");
$("#kn357").text("Moogles");$("#kd357").text("Moogles are a recurring race from the Final Fantasy computer games. They have small wings, usually pink / white fur and a pom-pom hanging from their heads.");
$("#kn358").text("Multi Genitalia");$("#kd358").text("Expresses an interest in characters that have more than one set of external sex organs.");
$("#kn359").text("Multiple Breasts");$("#kd359").text("Expresses an interest in characters that have more than one pair of breasts.");
$("#kn360").text("Multiple Characters");$("#kd360").text("Expresses an interest in the ability to take turns playing a character other than one's main character in a single roleplay, or simply involving a number of other characters within a roleplay.");
$("#kn361").text("Multiple Orgasms");$("#kd361").text("The act of cumming multiple times, sometimes in direct succession, or being the recipient of such actions.");
$("#kn362").text("Multiple Partners");$("#kd362").text("Engaging in an RP containing at least three characters.");
$("#kn363").text("Mummification / Cocooning");$("#kd363").text("The act of binding and wrapping a recipient tightly. Often implies severe restriction of movement and impossibility of escape.");
$("#kn364").text("Muscle Growth");$("#kd364").text("Increasing the size or strength of one's muscles by magical, medicinal, or other fantastic means.");
$("#kn365").text("Muscle Worship");$("#kd365").text("Gratuitous acknowledgment of someone's muscular physique, either verbal or physical.");
$("#kn366").text("Muscular Characters");$("#kd366").text("Expresses an interest in characters that are powerfully-built and / or athletic.");
$("#kn367").text("Mustelidae");$("#kd367").text("Minks, ferrets, weasels, stoats, otters, wolverines, martens etc.");
$("#kn368").text("Mutilation");$("#kd368").text("The act of physically damaging or otherwise causing irreparable change and / or harm to a character in an RP, typically by the use of cutting, stabbing or contact objects; often exceptionally painful.");
$("#kn369").text("My Little Pony");$("#kd369").text("Characters from, or related to, the television show 'My Little Pony");
$("#kn370").text("Natural Musk");$("#kd370").text("Refers to an RP involving characters where the aspect of musk is notably present / involved in play. Generally implies one or more characters having a distinct scent (typically with pheromones derived from the crotch).");
$("#kn371").text("Navel Play");$("#kd371").text("Engaging in sexual acts involving pleasure derived from a character's bellybutton; often refers to licking or tonguing of the navel.");
$("#kn372").text("Navel Vore");$("#kd372").text("Vore performed by use of the belly-button. In such situations the navel acts like an orifice. ");
$("#kn373").text("Necrophilia");$("#kd373").text("The act of having sex with a dead, or otherwise unconscious or inanimate, character that was once alive, or, theoretically, receiving such actions.");
$("#kn374").text("Nightclubs / Bars");$("#kd374").text("Engaging in an RP which is set in a nightclub or a bar setting.");
$("#kn375").text("Nipple Penetration");$("#kd375").text("The act of penetrating the nipple, often deep into the breast, with an object such as a finger, sex toy or penis, etc., or receiving such actions.");
$("#kn376").text("Non-Sapient Partner");$("#kd376").text("Expresses an interest in partners that do not have human-level intellect or consciousness. Such partners would include wild animals, zombies or some very primitive humans. ");
$("#kn377").text("Non-Sentient Partner");$("#kd377").text("Expresses an interest in partners that do not have consciousness or more complex senses. Such partners would include machines or plants. Often mistakenly used to describe non-sapient partners. ");
$("#kn378").text("Non-Standard Penetration");$("#kd378").text("Alternative forms of penetration outside of the norm such as of the ears, nose, eyes, or generating new / nonstandard holes to use in a sexually penetrative fashion.");
$("#kn379").text("Nonbinary");$("#kd379").text("Characters that do not strictly identify or abide by a gender binary (regardless of originally assigned gender or biological sex).");
$("#kn380").text("Nonconsensual");$("#kd380").text("Engaging in an RP in which a character will be forced to give or receive sex against their will by another character.");
$("#kn381").text("Nonsexual Pain");$("#kd381").text("Refers to either the administering and / or receiving of pain that is not derived through sexual activity and does not cause sexual gratification for the recipient, often interpreted to mean pain that is located in non-sexual parts of one's body.");
$("#kn382").text("Nonsexual Piercings");$("#kd382").text("Engaging in sex with a character who has piercings on parts of their body that are not of a sexual nature, such as but not limited to tongue, ears, nose, lips, bellybutton etc.");
$("#kn383").text("Nonsexual Roleplay");$("#kd383").text("Scenes of extended play that involve either no sex or very little sex.");
$("#kn384").text("Nonsexual Torture");$("#kd384").text("The act of causing or receiving extended scenes of pain due to acts that are not of a sexual nature, or giving or being the recipient of psychological abuse for extended periods of time or at a great degree of intensity.");
$("#kn385").text("NPC Characters");$("#kd385").text("Refers to the concept of a player taking on the role of characters generated specifically for the roleplay that are individual from the main character.");
$("#kn386").text("Nullification");$("#kd386").text("The removal / amputation of any body part.");
$("#kn387").text("Nursing");$("#kd387").text("The act of feeding a character by having them suckle a lactating breast, or receiving such actions.");
$("#kn388").text("Objectification");$("#kd388").text("The act of either being treated or treating another character as a specific and set object, often articles of furniture, or bestowing dehumanizing tasks to a character in order to imbue a character with the traits of an object.");
$("#kn389").text("Objectophilia");$("#kd389").text("A deep interest in particular inanimate objects. Denotes an expressed preference and / or strong feelings of love, sexual attraction, and / or commitment to certain items or structures of a character's fixation. Said objects may be things such furniture, cars, buildings, toys, clothing, and so on.");
$("#kn390").text("Older Characters");$("#kd390").text("Expresses a preference for characters that are older than one's own.");
$("#kn391").text("Onomatopoeia");$("#kd391").text("Engaging in an RP, or getting turned on by an emphasis on exaggerated descriptions of sexual noises in a roleplay, usually described with onomatopoeia, words that seek to duplicate the sounds they describe. Often refers to fluid noises such as: slosh, splurt, squirt, gurgle, splortch, or others.");
$("#kn392").text("Oral Fixation");$("#kd392").text("An act in which a character is unconsciously obsessed with the mouth and feels the need to be sucking, chewing, or inserting something into it.");
$("#kn393").text("Oral Sex (Giving)");$("#kd393").text("The act of performing fellatio or cunnilingus.");
$("#kn394").text("Oral Sex (Receiving)");$("#kd394").text("The act of receiving fellatio or cunnilingus.");
$("#kn395").text("Oral Virginity");$("#kd395").text("Engaging in an RP in which a character that has never performed fellatio or cunnilingus performs such acts.");
$("#kn396").text("Oral Vore");$("#kd396").text("Vore performed by use of the mouth. Implies swallowing of the prey. ");
$("#kn397").text("Orcs");$("#kd397").text("A race of humanlike creatures, normally larger than humans and green skinned. They are typically characterized as brutish and aggressive (but not necessarily so).");
$("#kn398").text("Orgasm Control / Denial");$("#kd398").text("Refers to the dominant(s) being in control of when the submissive(s) achieve(s) orgasm, either by physical means or by command; typically involves domination and / or excessive teasing and edging; orgasm may be completely denied");
$("#kn399").text("Orientation Play");$("#kd399").text("Expresses an interest in RP's in which one character's sexual orientation will be a focal point of the scene, typically in correlation with the discovery, exploration, or coercion of bisexuality / homosexuality in the sexuality of a character.");
$("#kn400").text("Original Characters");$("#kd400").text("Expressing an interest in characters that are of the player's own personalized creation (typically not from established publicized media).");
$("#kn401").text("Oviposition");$("#kd401").text("Engaging in an RP in which at least one character will lay eggs through an orifice.");
$("#kn402").text("Parasites");$("#kd402").text("Expresses an interest in characters being infested with a parasitic organism or hosting one, or involving parasitic characters in general.");
$("#kn403").text("Parent and Child Play");$("#kd403").text("Describes a kind of relationship where the dominant assumes the role of a parent. This usually involves the dominant party being especially caring, nurturing and protective towards their sub. Conditioning and guidance are often involved as well.");
$("#kn404").text("Paw Play");$("#kd404").text("Expresses an interest in play surrounding paws (hand or feet pads), generally of anthropomorphic characters.");
$("#kn405").text("Pegging");$("#kd405").text("Anal penetration with a strap-on.");
$("#kn406").text("Penisization");$("#kd406").text("A specific type of transformation in which the recipient becomes a disembodied penis or a penis with human attributes; such as legs. The result is often human-sized.");
$("#kn407").text("Permavore");$("#kd407").text("The concept in which players practicing vore delete, abandon or dedicate their character to the predator. Often suggests meta and canonical changes to the prey character and/or pred characters profile.");
$("#kn408").text("Petrification");$("#kd408").text("Also known as mineralization. The act of a recipient being transformed into a solid substance; most commonly a type of stone or metal. The recipient is unable to move but may still be aware.");
$("#kn409").text("Photograph References");$("#kd409").text("Expresses an interest in character profiles that use (professional standard, in accordance with site rules) photos, or 'face claims' for visual references for their character.");
$("#kn410").text("Photography / Videotaping");$("#kd410").text("The act of visually recording a scene amongst participants, often as a form of humiliation, exhibitionist fetishism and / or blackmail / extortion.");
$("#kn411").text("Physical Restraints");$("#kd411").text("The act of giving or receiving commands, typically verbal, that limit the way in which another character is permitted to physically interact with another character.");
$("#kn412").text("Piercing");$("#kd412").text("The act of piercing a character's body, typically in a painful manner, and often in a sexual or exceptionally sensitive location on the person's body, or having one's own body pierced.");
$("#kn413").text("Piss Enemas");$("#kd413").text("The act of performing an enema, the liquid being used in such being urine, or receiving such actions, often by means of someone urinating inside their partner.");
$("#kn414").text("Plants");$("#kd414").text("Any form of plant life, vegetation or character composed partially, or fully, there-of.");
$("#kn415").text("Pleasure Control / Denial");$("#kd415").text("Engaging in an RP in which one character is in a position to administer or withhold any form of physical, sexual or psychological pleasure to another character; pleasure may be completely denied.");
$("#kn416").text("Plot Twists");$("#kd416").text("Revelatory events in storytelling that alter the course of the roleplay.");
$("#kn417").text("Pokémon");$("#kd417").text("Characters from the manga and television show 'Pokémon'.");
$("#kn418").text("Polyamory");$("#kd418").text("The practice of carrying out intimate relationships with more than one partner, with the knowledge and consent of all involved partners. Often described as 'consensual, ethical, and responsible non-monogamy.'");
$("#kn419").text("Popping");$("#kd419").text("The act of causing a part of a character's anatomy, or the entire character, to explode by means of ballooning or inflation, or being the recipient of such actions.");
$("#kn420").text("Possessiveness / Jealousy");$("#kd420").text("Describes a character who is or becomes jealous or even possessive of their partner(s). Such a character may be (overly) demanding and overbearing in a relationship, growing aggressive towards those that may encroach on said partner.");
$("#kn421").text("Post Length: 1 - 2 Sentences");$("#kd421").text("Expresses an interest in roleplay posts that typically range from 1 to 2 sentences in length. This is roughly, on average; 15 to 40 words. ");
$("#kn422").text("Post Length: 14 - 25+ Sentences");$("#kd422").text("Expresses an interest in roleplay posts that typically range from 14 to 25+ sentences in length. This is roughly, on average; 210 to 500 words or more. 20 sentences or more is occasionally called verboma in order to differentiate from the use of verbose to describe much less. ");
$("#kn423").text("Post Length: 2 - 4 Sentences");$("#kd423").text("Expresses an interest in roleplay posts that typically range from 2 to 4 sentences in length. This is roughly, on average; 30 to 80 words. ");
$("#kn424").text("Post Length: 4 - 7 Sentences");$("#kd424").text("Expresses an interest in roleplay posts that typically range from 4 to 7 sentences in length. This is roughly, on average; 60 to 140 words. Commonly described as verbose. ");
$("#kn425").text("Post Length: 7 - 10 Sentences");$("#kd425").text("Expresses an interest in roleplay posts that typically range from 7 to 10 sentences in length. This is roughly, on average; 105 to 200 words. ");
$("#kn426").text("Potions / Injections");$("#kd426").text("The act of using and / or receiving a substance through any means that has a physical or mental effect on the character receiving it; implies fantastical or unrealistic results.");
$("#kn427").text("Powerbottoming");$("#kd427").text("An expressed interest in a sexual exchange where the character who is receiving penetration is in control, dominant, taking initiative, or directing the interaction.");
$("#kn428").text("Predator Species");$("#kd428").text("Expresses a preference for characters which are often perceived to be predatorial, e.g. wolves, hyenas, tigers, bears, dragons etc.");
$("#kn429").text("Predgasm");$("#kd429").text("Suggests that the character in the predator role gains significant mental or physical pleasure from the act of consuming or digesting the prey.");
$("#kn430").text("Pregnancy");$("#kd430").text("Engaging in an RP in which at least one character is pregnant, and / or includes themes of pregnancy.");
$("#kn431").text("Prehensile Cocks");$("#kd431").text("Expresses an interest in characters that have the ability to control the motion of their penises.");
$("#kn432").text("Premature Ejaculation");$("#kd432").text("Expresses interest in at least one partner reaching orgasm very quickly; typically implies eagerness, excessive sensitivity and / or prolonged teasing.");
$("#kn433").text("Prey Species");$("#kd433").text("Expresses a preference for characters which are often perceived to be meek or preyed upon, e.g. mice, deer, raccoons, bunnies etc.");
$("#kn434").text("Preygasm");$("#kd434").text("Suggests that the character in the prey role gains significant mental or physical pleasure from the act of being eaten or digested.");
$("#kn435").text("Private Roleplay");$("#kd435").text("Expresses an interest in conducting roleplay in private, be it private messages, notes, or some other nonpublic means of messaging.");
$("#kn436").text("Procyonidae");$("#kd436").text("Raccoons, coatimundi, longtails etc.");
$("#kn437").text("Prostate Play");$("#kd437").text("The act of stimulating the prostate, generally rectally with fingers or toys.");
$("#kn438").text("Prostitution");$("#kd438").text("Engaging in an RP in which at least one player's character is a prostitute, or involves a prostitute; a person who receives money for sex.");
$("#kn439").text("Pseudo-rape");$("#kd439").text("Arousal from a partner who pretends to resist and to struggle before being overpowered.");
$("#kn440").text("Pubic Hair");$("#kd440").text("Expresses an interest in pubic hair, possibly in large or excessive quantities.");
$("#kn441").text("Public Humiliation");$("#kd441").text("One or more characters engaging in explicit and elicit, sexual activity in a public setting for the purposes of humiliating one or more characters.");
$("#kn442").text("Public Room Roleplay");$("#kd442").text("Expresses an interest in conducting roleplays publicly, usually in a group with other players, in an open room within F-Chat (or group threads).");
$("#kn443").text("Puppeteering");$("#kd443").text("Controlling a character's body but not their mind. Suggests awareness of the control but an inability to prevent it. Often known as body control.");
$("#kn444").text("Puppy / Pony Play");$("#kd444").text("Engaging in an RP in which a domination / submission relationship is played between two characters, and in which the bottom character takes on the role and psyche of a feral puppy, pony, or other predetermined animal; typically involves rituals, speech restrictions, physical restrictions, and humiliation, as well as extensive training and a mixture of positive and negative reinforcement.");
$("#kn445").text("Pussy Worship");$("#kd445").text("Gratuitous acknowledgment of one's partner's vagina, either verbal and / or physical, or receiving such actions; typically implies oral stimulation.");
$("#kn446").text("Quadrupeds");$("#kd446").text("Characters that walk on four legs.");
$("#kn447").text("Queefing");$("#kd447").text("The sounds of air expulsion from the vagina via intercourse.");
$("#kn448").text("Racism");$("#kd448").text("Scenes based on / including negative racial stereotypes, scenes in racist settings, differing treatment depending on a character's given race, and possible usage of derogatory terms in the context of a roleplay.");
$("#kn449").text("Rapid Digestion / Absorption");$("#kd449").text("Digestion or absorption that happens in a short timeframe. Generally being less than an hour. ");
$("#kn450").text("Realism");$("#kd450").text("Expresses an interest in roleplaying scenes that are realistically possible by real life standards, or at the very least applying sensible logic and reason to situations, character responses, and motivations.");
$("#kn451").text("Realistic Cum");$("#kd451").text("Expresses a preference for engaging in an RP in which the volume and quality of sexual fluid is realistic.");
$("#kn452").text("Realistic Vore");$("#kd452").text("Expresses an interest in vore that is grounded in reality. Although this does not necessitate hard vore, it does often imply the prey is a manageable size for the vore method to be plausible.");
$("#kn453").text("Rebirthing (Vore)");$("#kd453").text("Situations in which the prey is ‘reborn’ after the consumption process; often changed in species or other aspects. Often seen after unbirthing, but can be done with other vore methods. ");
$("#kn454").text("Rectal Absorption");$("#kd454").text("Absorption that occurs within the rectal cavity. Often suggests conversion directly into the fat of the ass, thighs and other nearby locations.");
$("#kn455").text("Reformation (Vore)");$("#kd455").text("The idea that after an act in which a character is consumed and digested, they will be returned to life by some means. Usually in the same form the scene started in, but not always.");
$("#kn456").text("Replies: 0-2 Minutes");$("#kd456").text("Expresses an interest in the roleplay happening “Live”. Where the duration between posts is as close to instantaneous as possible. ");
$("#kn457").text("Replies: 10-60 Minutes");$("#kd457").text("Expresses an interest in the responses occurring every 10 minutes to 1 hour. ");
$("#kn458").text("Replies: 2-10 Minutes");$("#kd458").text("Expresses an interest in the responses occurring every 2 to 10 minutes.");
$("#kn459").text("Replies: 60+ Minutes");$("#kd459").text("Expresses an interest in the responses occurring every hour, but usually suggests within a 12-hour timeframe. ");
$("#kn460").text("Replies: Daily/Bidiurnal+");$("#kd460").text("Expresses and interest in the responses occurring whenever availability presents itself. Usually ranging from multiple posts in a day, to one every few days; but could be more. ");
$("#kn461").text("Reprogramming");$("#kd461").text("A form of mind control whereby the characters mind is often forcefully altered, in order to necessitate permanent changes to a character’s personality within the context of the scene. ");
$("#kn462").text("Reptiles");$("#kd462").text("Chameleons, anoles, alligators, snakes, crocodiles, lizards, etc.");
$("#kn463").text("Rimming (Giving)");$("#kd463").text("The act of giving oral stimulation to a partner's anus, by the means of licking and / or penetrating the recipient's anus with the tongue.");
$("#kn464").text("Rimming (Receiving)");$("#kd464").text("The act of receiving oral stimulation to one's anus, by the means of licking and / or having one's anus penetrated by the tongue.");
$("#kn465").text("Risk of Pregnancy");$("#kd465").text("Engaging in an RP in which there is an immediate and serious risk of at least one character becoming pregnant; often implies that at least one character does not want such a result.");
$("#kn466").text("Robots, Cyborgs, Androids");$("#kd466").text("Manufactured or partially manufactured life forms.");
$("#kn467").text("Rodents / Murines");$("#kd467").text("Rats, mice, chipmunks, squirrels, etc.");
$("#kn468").text("Role Reversal");$("#kd468").text("Refers to characters that, within the context of a particular RP, have, through character development or pre-determined measures, established their identity in regard to dominance and / or submissiveness, that will, at some point during the sexual portion of the RP, reverse their roles in regard to their previously understood roles.");
$("#kn469").text("Roleplay Perspective - First Person");$("#kd469").text("Roleplaying in a first-person perspective. 'I see you.' is an example of a sentence written in first person.");
$("#kn470").text("Roleplay Perspective - Second Person");$("#kd470").text("Using the word' you ' to refer to another's character and third person to refer to one's own.");
$("#kn471").text("Roleplay Perspective - Third Person");$("#kd471").text("Roleplaying from a third-person perspective. 'He sees her.' is an example of a sentence written in third person.");
$("#kn472").text("Roleplay Planning");$("#kd472").text("Expresses an interest in OOC discussion before the roleplay begins in order to plan and flesh out any ideas, plots, settings and kinks. Suggests the player desires to know what is going to loosely happen.");
$("#kn473").text("Roleplay Winging ");$("#kd473").text("Expresses an interest in minimal OOC discussion before the roleplay begins. Suggests the player wishes to experience key details of the roleplay as a surprise. ");
$("#kn474").text("Roleplay within RP");$("#kd474").text("Expresses an interest in two or more characters taking on roles within an RP and acting out a predetermined scene with predetermined characters.");
$("#kn475").text("Romance");$("#kd475").text("Displaying or expressing love or strong affection, passion, either during love making or during normal scenes. Typically involves the roleplaying of romantic relationships, acts, and themes.");
$("#kn476").text("Roughness");$("#kd476").text("The involvement of rough behavior and actions (typically during sex) upon a partner. Usually denotes harsh grabbing, pulling, brisk brusque motions, and similar physical conduct.");
$("#kn477").text("Rubber / Elastic Characters");$("#kd477").text("Expresses an interest in characters who are composed of rubber, latex, or an otherwise elastic material.");
$("#kn478").text("Sadism / Masochism");$("#kd478").text("The act of taking the role of a sadist or masochist, meaning one that receives sexual gratification from being the recipient of or administering physical pain.");
$("#kn479").text("Saliva");$("#kd479").text("Interest in roleplay that prominently includes saliva. This may refer to excessive secretion and great appreciation of it.");
$("#kn480").text("Same Size (Vore)");$("#kd480").text("Expresses an interest in vore scenes in which the predator and prey are of equal size to one another. Sometimes simply means that both characters are simply their regular size, which may still imply a relative size difference. ");
$("#kn481").text("Sarcomorphism");$("#kd481").text("The term given to a subset of heavily sexualised transformations to the body that are considered bizarre or unusual such as additional limbs or genitalia, cunt-nipples, dick-nipples, cunt-mouths, cock tongues and other extreme alterations to physique; often many of which are applied at the same time.");
$("#kn482").text("Scat");$("#kd482").text("Pertains to the inclusion of fecal matter or the expelling of fecal matter in any form in the sexual context of an RP.");
$("#kn483").text("Scat Torture");$("#kd483").text("The act of using fecal matter or the act of expelling fecal matter to abuse another character who is unwilling or uninterested in taking part in such actions, or being the recipient of such.");
$("#kn484").text("Scenes - Cyberpunk");$("#kd484").text("Scenes that take placed within the realm of Cyberpunk. Which is the branch of science fiction that blends advanced futuristic technology with dystopian themes such as poverty and crime.");
$("#kn485").text("Scenes - Dungeon");$("#kd485").text("Engaging in an RP which is set in a BDSM dungeon.");
$("#kn486").text("Scenes - Laboratory");$("#kd486").text("Engaging in an RP in which the setting is of a laboratorial nature.");
$("#kn487").text("Scenes - Locker Room");$("#kd487").text("Engaging in an RP in which the setting is a locker room.");
$("#kn488").text("Scenes - Office");$("#kd488").text("Engaging in an RP which is set in an office.");
$("#kn489").text("Scenes - School");$("#kd489").text("Engaging in an RP in which the setting is a school or college.");
$("#kn490").text("Scenes - Shower / Bath");$("#kd490").text("Engaging in an RP in which the setting includes a bath or shower, may be public and / or shared.");
$("#kn491").text("Scenes - Steampunk");$("#kd491").text("Setting in a roleplay where the main power source is steam. The time-period usually appearing as the 19th century, yet containing fantasy / futuristic elements, inventions, and machines often way ahead of it's time.");
$("#kn492").text("Scenes - Tribal");$("#kd492").text("Engaging in an RP set in a tribal village or wild area, located far from civilization.");
$("#kn493").text("Sci-fi");$("#kd493").text("Themes of the science-fiction genre, typically dealing with imaginative concepts such as futuristic science and technology, space travel, time travel, extraterrestrial life, and so on.");
$("#kn494").text("Scratching");$("#kd494").text("One character scratching another with their nails or claws, sometimes leaving marks; but not necessarily painful.");
$("#kn495").text("Sensory Deprivation");$("#kd495").text("Expresses an interest in the deliberate reduction or removal of stimuli from one or more of the senses. May include devices such as blindfolds, hoods, or earmuffs to cut off sight and hearing, or more complex devices that can cut off a character's sense of smell, touch, taste, heat sense, or gravity.");
$("#kn496").text("Sentient Cocks");$("#kd496").text("Expresses interest in cocks that are sentient. It might have the ability to twist and coil, move by itself, the external urethral orifice able to open and close at will, or be entirely stand alone without an attached 'host.' May have a more serpent-like appearance.");
$("#kn497").text("Sentient Disposal");$("#kd497").text("Sentience that continues after a digestive or transformative process occurs and the prey is disposed of. Does not necessarily imply excrement. Can also include bones, semen or other waste products.");
$("#kn498").text("Sentient Fat / Pudge");$("#kd498").text("Sentience that continues after a digestive or transformative process. They prey’s consciousness becomes conscious fat on some area of the predator’s body. ");
$("#kn499").text("Sex Driven");$("#kd499").text("Expresses a preference to eschew story and / or character development to reach the sexual context of a scene more quickly.");
$("#kn500").text("Sex Toys");$("#kd500").text("Refers to the inclusion of (generally penetrating) sex toys in an RP, including but not limited to dildos, vibrators, anal eggs, anal beads, flesh tubes, etc.");
$("#kn501").text("Sexism");$("#kd501").text("Scenes based on prejudices, stereotypes, or discrimination on the basis of sex or gender, including sexist settings.");
$("#kn502").text("Sexual Exhaustion");$("#kd502").text("Engaging in an RP in which at least one character's genitals and / or orifice(s) endure pain due to exceptionally arduous sex or sex of an exceptional duration; implies continuing despite such.");
$("#kn503").text("Sexual Frustration");$("#kd503").text("Engaging in an RP in which at least one character is exceptionally desperate or horny and is often willing to eschew standard inhibitions in order to receive sexual stimulation.");
$("#kn504").text("Sexual Pain");$("#kd504").text("Refers to the inclusion of physical pain due to acts which are directly sexual; typically rough or excessive penetrations.");
$("#kn505").text("Sexual Restraints");$("#kd505").text("Refers to a dominant giving a command for how the submissive may act in regard to sexual acts or within a sexual situation; often a decree of chastity or prohibition from any form of sexual contact.");
$("#kn506").text("Sexual Torture");$("#kd506").text("Torture that is sexual in nature, or greatly harms one sexually.");
$("#kn507").text("Sexy / Slutty Clothing");$("#kd507").text("Having least one character wear clothing that is of a sexually suggestive or explicit nature, including but not limited to exceptionally short skirts, flamboyant underwear, excessively tight clothing, clothing with explicit graphics, etc.");
$("#kn508").text("Shaving");$("#kd508").text("Engaging in the removal of fur / hair from a participant in an RP by the means of shaving.");
$("#kn509").text("Sheath Play");$("#kd509").text("The act of stimulating or otherwise playing with the sheath of a character, typically through tonguing or fingering, or receiving such actions, or being sexually aroused by the scent, taste, or touch of a sheath.");
$("#kn510").text("Sheaths");$("#kd510").text("Expresses an interest in characters that have a sheath.");
$("#kn511").text("Shemales");$("#kd511").text("Expresses an interest in female-identifying characters that have a penis (and typically breasts), but not a vagina.");
$("#kn512").text("Shooting Precum");$("#kd512").text("Engaging in an RP in which a character spurts precum with exceptional force and consistency.");
$("#kn513").text("Shorter Characters");$("#kd513").text("An expressed interest in characters that are shorter than one's character.");
$("#kn514").text("Shrinking");$("#kd514").text("Reducing in body size, usually a reduction of about one foot in size, or being the receiver of such actions.");
$("#kn515").text("Shrinking (Micro)");$("#kd515").text("Reducing in body size to such an extent that inches or smaller units are the most that can be used for measurement.");
$("#kn516").text("Sissification");$("#kd516").text("The act of changing the appearance of a male character through realistic means, particularly by the use of makeup, female clothes and / or female accessories, to appear as a female and / or forcing the male to adopt the mannerisms of a female, or being the recipient of such actions.");
$("#kn517").text("Size Differences (1-3 Feet)");$("#kd517").text("Engaging in an RP in which the height difference between any, two characters is between one and three feet.");
$("#kn518").text("Size Differences (Micro / Macro)");$("#kd518").text("Engaging in an RP in which the height difference between any, two characters is extremely large.");
$("#kn519").text("Size Theft");$("#kd519").text("The act of removing size from another character's (often sexual) physical assets and adding it to one's own.");
$("#kn520").text("Skinny Characters");$("#kd520").text("Expresses an interest in characters that are rather thin or lank.");
$("#kn521").text("Slice of Life");$("#kd521").text("Engaging in scenes of seemingly arbitrary events in a character's life, often lacking plot development and left open ended. Usually consists of naturally occurring themes and narratives that are of the casual and mundane variety.");
$("#kn522").text("Slime / Goo Characters");$("#kd522").text("Expresses an interest in characters who are composed of slime, goo, fluids, or similar viscous / semi-viscous substances.");
$("#kn523").text("Slob");$("#kd523").text("Characters without hygiene or uncaring of typical standards for cleanliness due to laziness, personal choice, or otherwise; may emphasize and derive pleasure from laziness or from actions linked with a lack of hygiene.");
$("#kn524").text("Sloppy Seconds");$("#kd524").text("Engaging in an RP in which a character that has just been came in receives sex from a different partner in the same orifice without removing the previous top's semen.");
$("#kn525").text("Small Breasts");$("#kd525").text("Expresses an interest in breasts that are particularly small, sometimes to the point of appearing absent.");
$("#kn526").text("Small Cocks");$("#kd526").text("Expresses an interest in cocks that are smaller than five inches.");
$("#kn527").text("Small Dom / Big Sub");$("#kd527").text("Expresses an interest in the bottom / submissive character being physically larger than the top / dominant character in an RP; often implies the larger character is also physically stronger as well.");
$("#kn528").text("Smegma");$("#kd528").text("Expresses an interest in the build-up substance that generates on one's genitals (typically under foreskin and labia) due to a lack of maintained hygiene.");
$("#kn529").text("Smoking");$("#kd529").text("Refers to the act of smoking and / or receiving pleasure from an aspect of smoking or smoke during an RP.");
$("#kn530").text("Snowballing");$("#kd530").text("The act of receiving cum into one's mouth transmitted from another person's mouth, or french kissing while sharing a load of cum between one anothers' mouths.");
$("#kn531").text("Socks / Stockings");$("#kd531").text("Expresses an interest in the inclusion of socks and / or stockings in the sexual context of an RP, or an interest in characters wearing such.");
$("#kn532").text("Soft Cum Facials");$("#kd532").text("The act of cumming directly onto one's face, typically into an open mouth or across the cheeks and / or lips, or receiving such actions.");
$("#kn533").text("Soft Vore");$("#kd533").text("Engaging in vore in which the prey character is consumed whole, causing no or minimal damage to the character due to the vore process.");
$("#kn534").text("Soiling");$("#kd534").text("The act of 'fecal soiling' in one's underwear, pants or clothes, or having another character perform such actions.");
$("#kn535").text("Somnic Vore");$("#kd535").text("Vore that occurs when either the predator, or the prey are sleeping. ");
$("#kn536").text("Somnophilia");$("#kd536").text("The act of engaging in sexual intercourse with a sleeping partner or enjoying being on the receiving end thereof.");
$("#kn537").text("Soul Vore");$("#kd537").text("The act of consuming the recipient's 'spirit'. Often souls are depicted to be orbs or ghostly representations of the recipient. They are often extracted by some means during the process.");
$("#kn538").text("Sounding");$("#kd538").text("The act of inserting metal rods into a character's urethra, or receiving such actions; technically implies rods that resonate and / or vibrate in response to a form of stimulation, but does not necessarily mean so.");
$("#kn539").text("Spanking");$("#kd539").text("The act of striking the buttocks of another character, or being the recipient of such; often as a form of erotic foreplay or as punishment in a BDSM setting.");
$("#kn540").text("Species Transformation");$("#kd540").text("Transforming a character into another species other than their own, may be done through a variety of means.");
$("#kn541").text("Speciesism");$("#kd541").text("Scenes that incorporate addressing another species in a derogatory manner, usually demeaning epithets and / or claiming superiority to another species in the context of a roleplay.");
$("#kn542").text("Speech Restrictions");$("#kd542").text("The act of giving or receiving commands, typically verbal, that limit the way in which another character is permitted to speak or otherwise make noise from one's mouth; typically used in a BDSM context to constrain the submissive to begging, animal noises or silence.");
$("#kn543").text("Squirting");$("#kd543").text("The act of a vagina emitting a projectile fluid during orgasm.");
$("#kn544").text("STDs");$("#kd544").text("Expresses an interest in play that incorporates sexually transmitted diseases, be they ones of real world origin or entirely fictional.");
$("#kn545").text("Stockholm Syndrome");$("#kd545").text("The act of a character trusting or displaying affection towards those responsible for kidnapping / taking them as a hostage, may or may not involve actual kidnapping vs. a domestic abuse relationship.");
$("#kn546").text("Stomach Bulging");$("#kd546").text("Engaging in an RP in which a character's stomach will bulge, either due to an exceptionally large insertion (often taking the shape of such), due to eating an exceptionally large amount of food, or as a localized form of inflation from any liquid or gas.");
$("#kn547").text("Story Driven");$("#kd547").text("Expresses a preference for RPs where plot and story are the focal point, typically involving complex situations, character development, framed scenes, elaboration, and amplification of settings. Often (but not necessarily) comparatively containing little sex.");
$("#kn548").text("Storytelling (Narrator)");$("#kd548").text("Expresses an interest in narrating the story, playing as the entire setting and running most of the characters and the environment for their partner(s), usually without playing a protagonist character of their own.");
$("#kn549").text("Storytelling (Player)");$("#kd549").text("Expresses an interest in playing the protagonist character in a story narrated by their partner, where the partner plays as the entire setting and running most of the characters and the environment for the protagonist character.");
$("#kn550").text("Strap-ons");$("#kd550").text("Engaging in an RP in which at least one character will wear a strap-on to penetrate another character.");
$("#kn551").text("Stretchy (Vore)");$("#kd551").text("Expresses an interest in the elasticity of the predator and the bulges the prey creates once consumed. May suggest detailed bulges or taught skin. ");
$("#kn552").text("Strip Tease");$("#kd552").text("The act of dramatically removing clothing or watching a participant do such, typically as a form of seduction.");
$("#kn553").text("Stuckage");$("#kd553").text("The act of a character getting trapped / stuck in one manner or another. For example: holes, doorways, windows, chairs.");
$("#kn554").text("Superheroes / Villains");$("#kd554").text("Characters that fit into the Superhero / Superhuman genre, set in a world of heroes and villains, where costumed crime fighters and individuals with superhuman powers exist.");
$("#kn555").text("Supernatural Transformation");$("#kd555").text("Transforming a character into a supernatural entity such as a vampire, werebeast, demon, god, and other such varied mythical figures. May be done through a variety of means.");
$("#kn556").text("Suspension Play");$("#kd556").text("Engaging in an RP that includes suspension apparatuses and / or rope toys, which typically will suspend one character above the bed or floor; often uncomfortable.");
$("#kn557").text("Swallowing Blood");$("#kd557").text("The act of orally consuming blood.");
$("#kn558").text("Swallowing Feces");$("#kd558").text("Engaging in an RP in which a character will orally consume fecal matter.");
$("#kn559").text("Swallowing Semen");$("#kd559").text("The act of orally consuming semen, either directly or indirectly from a penis.");
$("#kn560").text("Swallowing Urine");$("#kd560").text("Engaging in an RP in which a character will orally consume urine.");
$("#kn561").text("Swallowing Vomit");$("#kd561").text("Engaging in an RP in which a character will orally consume vomit.");
$("#kn562").text("Sweat");$("#kd562").text("The act of sweating and / or receiving sexual gratification from the appearance, taste, scent and / or tactility of sweat.");
$("#kn563").text("Tail Pulling");$("#kd563").text("Pulling a partner's tail during sexual intercourse. Often as a means of forcing the bottom to clench, or as a handle, or merely a cute act.");
$("#kn564").text("Tail Vore");$("#kd564").text("Vore performed by use of a tail. Often suggests the tail has a mouth, or orifice like opening. ");
$("#kn565").text("Tails");$("#kd565").text("A preference for characters that possess tails, regardless of the appropriateness of tails to the character's species.");
$("#kn566").text("Tailsex");$("#kd566").text("Penetrating an orifice using a character's tail.");
$("#kn567").text("Taller Characters");$("#kd567").text("An expressed interest in characters that are taller than one's character.");
$("#kn568").text("Tantric Sex");$("#kd568").text("A form of sex characterized by its focus on intimacy and emotional closeness between involved parties. Often implies a long duration with a significant aim on their intertwining such as listening to heartbeats, breathing, and exploring one another through a deep romantic bond.");
$("#kn569").text("Tattoos / Body Art");$("#kd569").text("An interest in characters that have tattoos.");
$("#kn570").text("Taurs");$("#kd570").text("Characters having an upper torso adjoining a lower quadrupedal body where the creature's head should normally appear. Includes centaurs, chakats, etc.");
$("#kn571").text("Teasing");$("#kd571").text("Refers to extended scenes of foreplay prior to explicit, sexual intercourse, which may be physical and / or verbal, typically to arouse one's partner to the point of sexual frustration or desperation.");
$("#kn572").text("Teeth Play");$("#kd572").text("Expresses an interest in play that revolves around one's teeth. Often denotes cleaning and similar dental play.");
$("#kn573").text("Tempvore");$("#kd573").text("The concept in which players practicing vore temporarily, abandon or dedicate their character to the predator. Often suggests meta and canonical changes to the prey character and/or pred characters profile.");
$("#kn574").text("Tentacles");$("#kd574").text("Engaging in an RP that involves self-sentient tentacles, or a character / entity with tentacle-like appendages. Often implies multiple penetration.");
$("#kn575").text("Thick / Sticky Cum");$("#kd575").text("A preference for characters' semen to be particularly thick and / or viscous, often comparable to tar or glue.");
$("#kn576").text("Throat Penetration");$("#kd576").text("The act of penetrating the mouth of another character to the depths at which the penis or insertion enters the back of the mouth cavity and / or throat, sometimes causing a gag reflex, or being the recipient of such actions.");
$("#kn577").text("Tickling");$("#kd577").text("The act of tickling and / or being tickled in a sexual context of an RP; or, receiving sexual stimulation from such.");
$("#kn578").text("Titfucking");$("#kd578").text("The act of placing one's penis in between a pair of breasts and achieving climax due to the friction thereof, or receiving such actions.");
$("#kn579").text("Tomboys");$("#kd579").text("Females who behave or present themselves in a masculine manner.");
$("#kn580").text("Toons");$("#kd580").text("Characters that are 'cartoony' in nature, implying exaggerated design styles and anatomy as well toony physics and behaviors.");
$("#kn581").text("Tooth Removal");$("#kd581").text("Expresses an interest in play that involves tooth removal.");
$("#kn582").text("Trans Females");$("#kd582").text("Expresses an interest in transgender characters that identify as female regardless of originally assigned gender or biological sex.");
$("#kn583").text("Trans Males");$("#kd583").text("Expresses an interest in transgender characters that identify as male regardless of originally assigned gender or biological sex.");
$("#kn584").text("Transgender");$("#kd584").text("Expresses an interest in characters whose assigned sex and identified gender are not the same, who identifies as a non-binary gender, or who has transitioned (or is in the process of transitioning) from one previously assigned gender to another.");
$("#kn585").text("Tribadism / Scissoring");$("#kd585").text("Form of non-penetrative sex in which a person rubs their vagina against a same-sex partner's body for sexual stimulation, in most cases vaginal-to-vaginal contact through scissoring.");
$("#kn586").text("Twinks");$("#kd586").text("Expresses an interest in male characters that are typically skinny / slim in build, having little or no body or facial hair, and described as conventionally attractive, but still present as masculine / male.");
$("#kn587").text("Twins / Clones");$("#kd587").text("Expresses an interest in two or more characters who are identical, often siblings but not necessarily, who may or may not be played by the same player.");
$("#kn588").text("Udders");$("#kd588").text("Expresses interest in characters with udders instead of, or in addition to, normal breasts.");
$("#kn589").text("Unbirthing");$("#kd589").text("The act of physically consuming another character through the vagina and into the womb, or being the recipient of such actions.");
$("#kn590").text("Uncut Cocks");$("#kd590").text("Expresses an interest in penises that have not been circumsized and have present foreskin.");
$("#kn591").text("Undead");$("#kd591").text("The undead. Zombies, and other undead creatures.");
$("#kn592").text("Underage Characters");$("#kd592").text("A situation in which at least one character involved will be under the age of 18.");
$("#kn593").text("Underwear");$("#kd593").text("An affinity for underwear, either being worn on one's self, one's partner(s) or by itself; often involves stimulation from the scent or tactility of the underwear, but may also refer to using underwear as a sex toy in any way.");
$("#kn594").text("Underwear Bulges");$("#kd594").text("The act of being sexually aroused or stimulated by the sight and / or feel of someone's genitalia creating a bulge on the front of their underwear; typically refers to exceptionally large bulges, and may include pants bulges as well.");
$("#kn595").text("Uniforms");$("#kd595").text("The act of being sexually aroused by uniforms or work-related attire, and / or engaging in RPs in which characters will wear such clothing.");
$("#kn596").text("Unintelligent Characters");$("#kd596").text("Exhibits a preference for characters that exhibit below-average intelligence, often low enough to make them easy to manipulate; this includes everything from air-headed bimbos to large, animalistic brutes.");
$("#kn597").text("Unrealistic Vore");$("#kd597").text("Engaging in a vore scene in which realistic physiology is not taken into account; typically connotates soft vore.");
$("#kn598").text("Unusual Semen");$("#kd598").text("A preference for a character's semen to have any number of unusual or atypical properties, often referring to taste, color, texture, scent and / or temperature.");
$("#kn599").text("Unwashed Musk");$("#kd599").text("Refers to an RP involving characters where the aspect of unwashed musk is notably present / involved in play. Generally implies one or more characters having a distinct scent due to a lack of hygiene (typically with pheromones derived from the crotch).");
$("#kn600").text("Unwilling Predator");$("#kd600").text("Expresses an interest in vore situations where the predator is not willing to consume the prey. Often implies coaxing or force.");
$("#kn601").text("Unwilling Prey");$("#kd601").text("Expresses an interest in vore situations where the prey is not willing to be consumed by the predator. Often implies coaxing or force.");
$("#kn602").text("Uppity");$("#kd602").text("Expresses an interest in engaging in an RP in which the submissive and / or bottom character is combative and disobedient in any number of ways.");
$("#kn603").text("Urethra Play");$("#kd603").text("Sexual stimulation or play involving the urethra. When involving cocks, typically connotates inserting objects into the penis.");
$("#kn604").text("Ursines");$("#kd604").text("Bears! Bears! Bears!");
$("#kn605").text("Vaginal Fisting");$("#kd605").text("The act of placing one's hand(s) and / or arm(s) into a vagina, or receiving such actions.");
$("#kn606").text("Vaginal Prolapse");$("#kd606").text("Where insides of the vagina are pulled out by force (unnatural means, such as a cream, liquid or suction method, or internal massage) or naturally (either by a cock, dildo, or pushing).");
$("#kn607").text("Vaginal Sex (Giving)");$("#kd607").text("The act of sexually penetrating a vagina.");
$("#kn608").text("Vaginal Sex (Receiving)");$("#kd608").text("The act of being sexually penetrated in the vagina.");
$("#kn609").text("Vaginal Virginity");$("#kd609").text("Engaging in vaginal sex with a character who has never been vaginally penetrated before, or being vaginally penetrated while playing a character that has never been penetrated before.");
$("#kn610").text("Vampires");$("#kd610").text("Vampiric characters, not necessarily humanoid.");
$("#kn611").text("Vampiric Vore");$("#kd611").text("Vore which revolves around the draining of fluids or life essence, most commonly but not always blood. ");
$("#kn612").text("Vanilla Sex");$("#kd612").text("Sex which does not involve such elements as BDSM, kink, or fetish activities.");
$("#kn613").text("Verbal Abuse");$("#kd613").text("The act of verbally accosting or being verbally accosted with derogatory terms pertaining to sex, or in the effort to demean, degrade or otherwise humiliate another character, or occasionally to elicit sexual stimulation from abuse.");
$("#kn614").text("Very Experienced Partners");$("#kd614").text("Refers to players whose characters are exceptionally experienced and / or skilled in the practice of sex, and typically connotates esoteric sexual abilities and / or knowledge, or the interest in RPing with such characters; does not refer to the RPing capabilities of the player.");
$("#kn615").text("Very Fat Characters");$("#kd615").text("Expresses an interest in characters that are exceptionally overweight or obese.");
$("#kn616").text("Very Lithe Characters");$("#kd616").text("Expresses an interest in characters that are exceptionally thin or lank.");
$("#kn617").text("Very Muscular Characters");$("#kd617").text("Expresses an interest in characters that are exceptionally muscular or toned.");
$("#kn618").text("Violence");$("#kd618").text("Themes that incorporate the use of intense force that results in physical pain and discomfort.");
$("#kn619").text("Voluptuousness");$("#kd619").text("Expresses an interest in characters with wider than average hips and large buttocks.");
$("#kn620").text("Vomiting");$("#kd620").text("The act of vomiting, being vomited upon, consuming vomit or otherwise including vomit in the sexual context of an RP.");
$("#kn621").text("Vore (Being Predator)");$("#kd621").text("Being the consuming partner in a vore or unbirth situation, acting as the predator.");
$("#kn622").text("Vore (Being Prey)");$("#kd622").text("Being the consumed partner in a vore-related RP situation.");
$("#kn623").text("Vore Tattoos");$("#kd623").text("Tattoos or markings that appear on the predator’s body once a prey has either been consumed, digested or absorbed. May be images of prey’s face or symbolic representations of them. ");
$("#kn624").text("Voreplay Foreplay");$("#kd624").text("Expresses an interest in vore scenes which have build-up and context before the act of vore. Often suggest a plot and setting, and generally suggests complexity to the scene beyond a simple meeting of characters. ");
$("#kn625").text("Voyeurism");$("#kd625").text("Participating in watching other individuals engaging in sex or some other kind of intercourse, usually discretely and without their knowledge.");
$("#kn626").text("Vulpines");$("#kd626").text("Foxes, fennecs, kitsune etc.");
$("#kn627").text("Wardrobe Malfunctions");$("#kd627").text("An interest in scenes that involve clothing mishaps. May involve parts of a character's body being exposed unintentionally, clothing breaking, failing, or being ill fitting.");
$("#kn628").text("Watersports");$("#kd628").text("Pertains to the inclusion of urine, or the expelling of urine, in any form, in the sexual context of an RP.");
$("#kn629").text("Wax Play");$("#kd629").text("The act of using wax, typically hot candle wax, as a form of sexual stimulation and / or torture, or receiving such actions.");
$("#kn630").text("Waylaying");$("#kd630").text("Changes to the roleplay plot/story/outcome that the other participants (and often players) did not intend or foresee. These are often described as “surprises” within the roleplay. ");
$("#kn631").text("Weapon Play");$("#kd631").text("Expresses an interest in the incorporation of weaponry, such as knives, swords, guns, and various other armaments.");
$("#kn632").text("Weight Gain (Heavy / Extreme)");$("#kd632").text("The act of a character gaining significant amounts of weight (be it through the increased consumption of food, magical / scifi effects, or other influences) or engaging in an RP where a character does as such. Typically in unrealistic or large quantities and paces.");
$("#kn633").text("Weight Gain (Light / Medium)");$("#kd633").text("The act of a character gaining weight (be it through the increased consumption of food, magical / scifi effects, or other influences) or engaging in an RP where a character does as such. Typically in more realistic amounts and paces.");
$("#kn634").text("Weight Loss");$("#kd634").text("The act of losing of weight through various means, or engaging in an RP in which a character does such.May be done realistically, unrealistically, through starvation, work out, through magical / scifi effects, or a variety of other methods.");
$("#kn635").text("Wetting");$("#kd635").text("The act of urinating in one's underwear, pants or clothes, or having another character urinate onto a person who is clothed to any degree.");
$("#kn636").text("Willing Predator");$("#kd636").text("Expresses an interest in vore situations where the pred desires to consume the prey.");
$("#kn637").text("Willing Prey");$("#kd637").text("Prey in a vore situation that is willing and desires to be eaten by the predator, regardless for the reason.");
$("#kn638").text("Wings");$("#kd638").text("A preference for characters that possess wings, regardless of the appropriateness of wings to the character's species.");
$("#kn639").text("World of Warcraft");$("#kd639").text("Roleplay taking place in the World of Warcraft universe.");
$("#kn640").text("Wound Fucking");$("#kd640").text("Inserting one's cock into a wound, either preexisting or freshly made, in order to engage in intercourse.");
$("#kn641").text("Xeno / Alien");$("#kd641").text("Extraterrestrial or otherwise alien / abnormal characters.");
$("#kn642").text("Younger Characters");$("#kd642").text("Expresses a preference for characters that are younger than one's own.");
$("#kn643").text("Zoophilia");$("#kd643").text("Refers to a sapient character engaging in a sexual act with a non-sapient animal, or playing a non-sapient animal in an RP and being engaged by a sapient character.");


  $(".p0").append("□□□□□□□□□□ 000 %");
 $(".p10").append("■□□□□□□□□□ 010 %");
 $(".p20").append("■■□□□□□□□□ 020 %");
 $(".p30").append("■■■□□□□□□□ 030 %");
 $(".p40").append("■■■■□□□□□□ 040 %");
 $(".p50").append("■■■■■□□□□□ 050 %");
 $(".p60").append("■■■■■■□□□□ 060 %");
 $(".p70").append("■■■■■■■□□□ 070 %");
 $(".p80").append("■■■■■■■■□□ 080 %");
 $(".p90").append("■■■■■■■■■□ 090 %");
$(".p100").append("■■■■■■■■■■ 100 %");
$(".p200").append("♥♥♥♥♥♥♥♥♥♥ 200%");
$(".p-10").append("N / A");
$(".p999").append("REQUIRED FOR PLAY");
$(document).ready(function() {
$(".search").keyup(function () {
var searchTerm = $(".search").val();
var listItem = $('.results tbody').children('tr');
var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

$.extend($.expr[':'], {'containsi': function(elem, i, match, array){
return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
}
});

$(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
$(this).attr('visible','false');
});

$(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
$(this).attr('visible','true');
});

var jobCount = $('.results tbody tr[visible="true"]').length;

if(jobCount == '0') {$('.no-kinks').show();}
else {$('.no-kinks').hide();}
});
});
$('.kinko input:first-child').after('<a href="https://mojojohoe.github.io/Kinko/index"><img id="logo" src="https://mojojohoe.github.io/Kinko/Kinko.png"></a>');

});

    function Compare(){
		if (localStorage.getItem("Kinko-KCode") === null) {
			alert("You don't currenly have a Kinko profile saved on this computer. This may be because you haven't created one yet, or it has been deleted. To create your own click the logo to be taken to the tool.");
		}
		else{
			
		if ( $( "#kinko-temp" ).length ) {	
    $( "#kinko-temp").html(localStorage.getItem('Kinko-KCode'));
}
		else{
	$('.kinko').prepend('<div type="hidden" id="kinko-temp"/></div>');
	$( "#kinko-temp").html(localStorage.getItem('Kinko-KCode'));

}	
if ($(".k_select")[0]){
    
} else {
$('.kbut').after('<div class="k_select"><select><option value="1">Matched preferences at the top. Most liked to least liked.</option><option value="2">Matched preferences at the top. Least liked to most liked.</option><option value="3">Matched kinks ranked by compatibility. Most compatible to least.</option><option value="4">Matched kinks ranked by compatibility. Least compatible to most.</option></select><div class="k_select_arrow"></div></div>');
		$('.trow').each(function(i, obj) {
		$(this).attr('data-rank', 0);
		});
		comparison();
}			
}
}

function comparison(){
	
	
$('#kinko-temp > p').each(function(i, obj) {
		var c_id = $(this).attr('id');
		var c_class = $(this).attr('class');
		var num = c_id.replace(/kp/, '');
		var c_pref = c_class.replace(/p/, '');
		
		if ( $('#kp' + num ).not("#kinko-temp").length ) {	
		var o_class = $('#kp' + num ).not("#kinko-temp").attr('class');
		var o_pref = o_class.replace(/p/, '');
		
		var o_key = ({
        "999" : "14",
        "200" : "13",
        "100" : "12",
        "90"  : "11",
        "80"  : "10",
		"70"  : "9",
		"60"  : "8",
		"50"  : "7",
		"40"  : "6",
		"30"  : "5",
		"20"  : "4",
		"10"  : "3",
		"0"   : "2",
		"-10" : "1",
 		 })[o_pref];
		
		var c_key = ({
        "999" : "14",
        "200" : "13",
        "100" : "12",
        "90"  : "11",
        "80"  : "10",
		"70"  : "9",
		"60"  : "8",
		"50"  : "7",
		"40"  : "6",
		"30"  : "5",
		"20"  : "4",
		"10"  : "3",
		"0"   : "2",
		"-10" : "1",
 		 })[c_pref];
		 
		 var c_colour = ({
        "999" : "rgba(155, 245, 242, 0.3)",
        "200" : "rgba(178, 155, 245, 0.3)",
        "100" : "rgba(117, 248, 104, 0.3)",
        "90"  : "rgba(151, 255, 127, 0.3)",
        "80"  : "rgba(186, 255, 147, 0.3)",
		"70"  : "rgba(203, 255, 153, 0.3)",
		"60"  : "rgba(220, 255, 153, 0.3)",
		"50"  : "rgba(248, 255, 153, 0.3)",
		"40"  : "rgba(255, 229, 153, 0.3)",
		"30"  : "rgba(249, 215, 156, 0.3)",
		"20"  : "rgba(249, 203, 156, 0.3)",
		"10"  : "rgba(249, 184, 156, 0.3)",
		"0"   : "rgba(234, 153, 153, 0.3)",
		"-10" : "rgba(183, 183, 183, 0.5)",
 		 })[c_pref];
		
		$( "#tr" + num).attr('data-rank', c_key);
		$( "#tr" + num).css( "background-color", c_colour );
		}	
		});
c_sort_az();
}

$(document).on('change', '.k_select', function() {
  var rank = $('.k_select').find(":selected").val();

if ( rank == 1 ) {	
  comparison();
$('.trow').each(function(index) { 
    if($(this).attr('data-rank') == '15')
    {
       $(this).attr('data-rank', '0');
    }
});  

c_sort_za();
}

else if ( rank == 2 ) {	
   comparison();
$('.trow').each(function(index) { 
    if($(this).attr('data-rank') == '0')
    {
       $(this).attr('data-rank', '15');
    }
});
c_sort_az()	
}

});
function c_sort_az(){
	
$('.kinko-table').find('.trow').sort(function(a, b) {
    return +$(a).data('rank') - +$(b).data('rank');
})
.appendTo('.kinko-table');
	
}
function c_sort_za(){
	
$('.kinko-table').find('.trow').sort(function(b, a) {
    return +$(a).data('rank') - +$(b).data('rank');
})
.appendTo('.kinko-table');
	
}
 /**
 * SAVE
 * Prompts the user if they wish to overwrite their save.

	
		
		
		$('.kb').each(function(i, obj) {
			$(this).prop( "checked", false );
			var no = $(this).attr('id');
			$("#kb_" + no).attr("style", "");
		})
		$('#enabled').empty();
		
		$('#load > p').each(function(i, obj) {
		var current_id = $(this).attr('id');
		var current_class = $(this).attr('class');
		var num = current_id.replace(/kp/, '');
		var class_no = current_class.replace(/p/, '');
		
		$( "#" + num ).prop( "checked", true );
		$( "#" + num  ).trigger( "onclick" );
		
		if (class_no >= 0 && class_no <= 100){
			$("#rsv_" + num).html( class_no + "%");
			$("#rsv_" + num).css( "background-color", "rgb(102," + class_no * 2.5 + ", 20)" );
			$("#KI-S_" + num).prop("value", class_no / 10);
		}
		else if (class_no == -10){
		$( "#KI-NA_" + num ).prop( "checked", true );
		$( "#KI-NA_" + num ).trigger( "onclick" );
		$( "#rsv_" + num).text( "N/A" );		
		$( "#rsv_" + num).css( "background-color", "#66717A" );
		}
		else if (class_no == 999){
		$( "#KI-R_" + num ).prop( "checked", true );
		$( "#KI-R_" + num ).trigger( "onclick" );
		$( "#rsv_" + num).text( "Required" );		
		$( "#rsv_" + num).css( "background-color", "#D57A20" );		
		}
		else if (class_no == 200){
		$( "#KI-F_" + num ).prop( "checked", true );
		$( "#KI-F_" + num ).trigger( "onclick" );
		$( "#rsv_" + num).text( "200%" );
		$( "#rsv_" + num).css( "background-color", "#9D97F0" );
		}
		else{
		$("#KI-S_" + num).prop("value", 0);
		$( "#rsv_" + num).text( "?" );	
		$( "#rsv_" + num).css( "background-color", "#483749" );
		}
		
		if ($(this).data("info") === 'tt'){
		var regex_load = "\\\('#ttxt" + num + "'\\\)\\\.html\\\('\(\.\*\?\)'\\\);";
		var custom_code = $('<div />').html(localStorage.getItem('Kinko-CCode')).text();
		var comment = custom_code.match(RegExp(regex_load));
			$('#kpb-C_' + num).val(comment[1]);
			
	 */	