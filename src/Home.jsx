import React, { useState } from 'react'
import Footer from './components/Footer'
import CookieConsent from 'react-cookie-consent'
import axios from 'axios'
import { useStateContext } from './context/StateContext'
import LanguageBar from './components/LanguageBar'
import English from './English'

const Home = () => {
  const { language } = useStateContext()

  console.log(language)

  const [cookieAccept, setCookieAccept] = useState(false)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const increaseVisitorsCount = async () => {
    const { data } = await axios.put(
      `https://pictusweb.online/api/visitors/gender/increase`,
      // `http://localhost:2000/api/visitors/gender/increase`,
      config
    )
  }
  return (
    <>
      <div className='text-white'>
        <LanguageBar />
        {language === 'english' ? (
          <English />
        ) : (
          <>
            <div className='hero'>
              <h1 className='text-[#ffffff] text-[40px] text-center pt-[17.5%]  lg:pt-[20%]'>
                Či si homosexuál alebo heterosexuál,
              </h1>
              <h2 className='text-[#f1bf41] text-[35px] text-center'>
                Ježiš ťa miluje rovnako!
              </h2>
            </div>
            <div className='bg-[#673337]'>
              <div className='text-justify mx-4 lg:mx-8 text-[18px] pt-20 py-8 intro'>
                <h3 className='text-white text-[25px]'>Ako to viem?</h3>
                <p>
                  Pretože zomrel za hriechy celého ľudstva. Ak by miloval len
                  heterosexuálov, potom by predsa nezomieral za hriechy celého
                  sveta.
                  <span className='italic'>
                    {' '}
                    On je obeťou zmierenia za naše hriechy, a nielen za naše,
                    ale aj za hriechy celého sveta.{' '}
                  </span>
                  <span className='text-[15px]'>Prvý Jánov 2:2 </span>
                  On miluje každého človeka.
                  <span className='italic'>
                    {' '}
                    Ale Boh dokazuje svoju lásku k nám tým, že Kristus umrel za
                    nás, keď sme boli ešte hriešni.{' '}
                  </span>
                  <span className='text-[15px]'> Rimanom 5:8 </span>
                  <span className='italic'> Boh neuprednostňuje nikoho. </span>
                  <span className='text-[15px]'> Rimanom 2:11 </span>
                </p>
                <p className='mt-4'>
                  Pán Ježiš bol priateľ hriešnikov a colníkov a preto Ho
                  vtedajší kňazi odsudzovali.
                  <span className='italic'>
                    {' '}
                    Prišiel Syn človeka, ktorý je a pije, a hovoríte: Ajhľa,
                    človek žráč a pijan vína, priateľ colníkov a hriešnikov.{' '}
                  </span>
                  <span className='text-[15px]'> Lukáš 7:34 </span>
                </p>

                <h3 className='text-white text-[25px]'>
                  Máme povinnosť sa vzájomne milovať
                </h3>
                <p>
                  <span className='italic'>
                    {' '}
                    Lebo jedno prikázanie obsahuje celý zákon v plnosti, ono:
                    Milovať budeš blížneho svojho ako seba samého.{' '}
                  </span>
                  <span className='text-[15px]'>Galatským 5:14 </span>
                  <span className='italic'>
                    {' '}
                    Kto nemiluje, nepoznal Boha, pretože Boh je láska.{' '}
                  </span>
                  <span className='text-[15px]'> Prvý Jánov 4:8 </span>
                  <span className='italic'>
                    {' '}
                    Lebo to je láska k Bohu, aby sme zachovávali Jeho
                    prikázania; a Jeho prikázania nie sú ťažké.{' '}
                  </span>
                  <span className='text-[15px]'> Prvý Jánov 5:3 </span>
                </p>
                <p className='mt-4'>
                  Osobne sa poznám s niekoľkými homosexuálmi a sú to priateľskí
                  ľudia. Sú talentovaní a slušní k druhým. Sú empatickí a
                  spoločenskí.
                </p>

                <h3 className='text-white text-[25px]'>Každý človek zhrešil</h3>
                <p>
                  <span className='italic'>
                    {' '}
                    Všetci totiž zhrešili a nemajú slávy Božej.{' '}
                  </span>
                  <span className='text-[15px]'>Rimanom 3:23 </span> Problém
                  celého ľudstva
                  <span className='text-[15px]'>
                    {' '}
                    (homosexuálov a heterosexuálov),{' '}
                  </span>
                  je hriech a to akýkoľvek. Ten totiž oddeľuje človeka od Božej
                  prítomnosti.
                </p>

                <p className='mt-4'>
                  Ak usilovne pracuješ, chrániš prírodu, robíš dobročinnosť, ale
                  neveríš v Ježiša, si odsúdený, ak v tejto nevere zostaneš.
                  Ľudia sa počas potopy utopili nie preto, že by boli všetci
                  neprispôsobivé individuá, ale preto, že neuverili Noachovi a
                  nevstúpili do korábu. Utopili sa aj priateľskí, aj
                  talentovaní, aj slušní, aj empatickí, aj spoločenskí.
                </p>

                <h3 className='text-white text-[25px]'>
                  Kto verí, je ospravedlnený
                </h3>
                <p>
                  Ježiš ale zomrel za hriechy všetkých a ten kto v Neho verí, je
                  ospravedlnený pred Bohom.
                  <span className='italic'>
                    {' '}
                    Kto verí v Neho, nebude súdený.{' '}
                  </span>
                  <span className='text-[15px]'>Ján 3:18 </span>
                  Viera však musí byť úprimná, zo srdca. A tá sa prejavuje tým,
                  že človek po tom ako uveril v Ježiša, má túžbu a snahu opustiť
                  hriech a jeho otroctvo.
                  <span className='italic'>
                    {' '}
                    Kto však neposlúcha Syna, neuvidí život, ale hnev Boží
                    zostáva na ňom.{' '}
                  </span>
                  <span className='text-[15px]'> Ján 3:36 </span>
                </p>

                <h3 className='text-white text-[25px]'>Je inakosť hriechom?</h3>
                <p>
                  Božie Slovo sa často dotýka problematiky nemanželského vzťahu.
                  <span className='italic'>
                    {' '}
                    Varujte sa smilstva! Každý (iný) hriech, ktorého sa človek
                    dopustí, je mimo tela; ale kto smilní, hreší proti vlastnému
                    telu.{' '}
                  </span>
                  <span className='text-[15px]'>Prvý Korintským 6:18 </span>
                  <span className='italic'>
                    {' '}
                    Manželstvo všetci majte v úcte a manželské lôžko
                    nepoškvrnené, lebo smilníkov a cudzoložníkov bude súdiť Boh.{' '}
                  </span>
                  <span className='text-[15px]'> Židom 13:4 </span>
                </p>
                <p className='mt-4'>
                  Vyriešil by sobáš partnerov rovnakého pohlavia tento problém?
                  Božie Slovo na niektorých miestach spomína aj homosexuálne
                  vzťahy.
                  <span className='italic'>
                    {' '}
                    Preto ich Boh vydal nehanebným náruživostiam, veď ich ženy
                    zamenili prirodzený styk s mužmi za protiprirodzený, a
                    podobne aj mužovia zanechali prirodzený styk so ženou a
                    rozpálili sa vášňou medzi sebou: mužovia s mužmi páchali
                    hanebnosť a za svoje poblúdenie sami na sebe niesli odplatu,
                    akú si zaslúžili. A keďže nepokladali za hodné zachovať si
                    poznanie Boha, vydal ich Boh prevrátenému zmýšľaniu, aby
                    páchali, čo sa nesluší: naplnení všetkou neprávosťou
                    smilstvom.{' '}
                  </span>
                  <span className='text-[15px]'> Rimanom 1:26-29</span>
                  <span className='italic'>
                    {' '}
                    Poznali síce právny poriadok Boží, že tí, čo pášu takéto
                    veci, zasluhujú si smrť, a predsa nielen sami ich robia, ale
                    aj schvaľujú, keď ich pášu iní.{' '}
                  </span>
                  <span className='text-[15px]'> Rimanom 1:32 </span>
                </p>
                <p className='mt-4'>
                  Či žiješ v nemanželskom heterosexuálnom vzťahu alebo vo vzťahu
                  s rovnakým pohlavím (rozhodujúce pohlavie je to prirodzené pri
                  narodení človeka, nie to po operačnom zákroku zmeny pohlavia),
                  Božie Slovo ich dáva na rovnakú úroveň.
                  <span className='italic'>
                    {' '}
                    Nemýľte sa! Ani smilníci, ani modloslužobníci, ani
                    cudzoložníci, ani muži súložiaci s mužmi, ani zlodeji, ani
                    lakomci, ani opilci, ani rúhači, ani vydierači nebudú
                    dedičmi kráľovstva Božieho!{' '}
                  </span>
                  <span className='text-[15px]'> Prvý Korintským 6:9-10</span>
                </p>

                <h3 className='text-white text-[25px]'>
                  Možno sa necítiš byť tým kým si sa narodil
                </h3>

                <p className='mt-4'>
                  Sme tými, kým sa cítime alebo sme tými, kým sme sa narodili?
                  Cítiš sa byť prezidentom? Nie si. Cítiš sa byť opicou? Nie si.
                  Cítiš sa byť rastlinou? Nie si. Cítiš sa byť opačným pohlavím?
                  Nie si.
                </p>

                <p className='mt-4'>
                  City a myšlienky sú častokrát zavádzajúce, pretože sú
                  deformované hriechom. Chvíľu sa ti to páči, inokedy si
                  nešťastný.
                </p>

                <p className='mt-4'>
                  Si tým, ako si stvorený.
                  <span className='italic'>
                    {' '}
                    Od počiatku stvorenia však stvoril ich Boh ako muža a ženu.
                    Preto opustí človek otca i matku a bude sa pridŕžať svojej
                    manželky, a budú dvaja jedno telo; takže už nie sú dve telá,
                    ale jedno. Čo teda Boh spojil, človek nerozlučuj!
                  </span>
                  <span className='text-[15px]'> Marek 10:6-9 </span>
                </p>

                <p className='mt-4'>
                  Ak si sa narodil ako chlapec, si muž. Ak si sa narodila ako
                  dievča, si žena. Potom to bola vôľa Stvoriteľa, aby si
                  bol/bola tým, čím si od narodenia. A to preto, lebo s tebou má
                  dobrý úmysel. Tak prečo ísť proti vôli Najvyššieho?
                </p>

                <h3 className='text-white text-[25px]'>Sám to nezvládneš</h3>
                <p>
                  Ak prijmeš Ježiša, začne v tebe boj dvoch svetov.
                  <span className='italic'>
                    {' '}
                    Lebo telo žiada proti duchu a duch proti telu; navzájom si
                    odporujú, aby ste nerobili, čo by ste chceli.{' '}
                  </span>
                  <span className='text-[15px]'> List Galatským 5:17 </span>
                  Čím viac budeš posilňovať svojho ducha, tým bude slabšie telo
                  a to vypôsobí, že doterajšia žiadostivosť k hriechu bude
                  slabnúť. Nejde o telo samotné, ale o toho zlého, ktorý ho má v
                  područí.
                  <span className='italic'>
                    {' '}
                    Veď náš boj nie je proti krvi a telu, ale proti kniežatstvám
                    a mocnostiam, proti pánom sveta tejto temnosti, proti zlým
                    duchom v nebesiach.{' '}
                  </span>
                  <span className='text-[15px]'> List Efezským 6:12 </span>
                  Túto moc temna
                  <span className='text-[15px]'>
                    (duchovnú držbu v neslobode){' '}
                  </span>
                  v tvojom živote môže zviazať ten, koho Pánom je Ježiš, kto
                  nesie Jeho autoritu. Sám som túto autoritu uplatňoval vo
                  svojom živote - v rôznych oblastiach
                  <span className='text-[15px]'>
                    {' '}
                    (človek môže byť v neslobode v akejkoľvek oblasti života ako
                    je aj prílišná spotreba, otrocké nasledovanie módnych
                    trendov, zastretý zrak v nevere v Boha, trvajúca závisť,
                    pýcha života, nezdravá ustarostenosť, závislosť na
                    počítačových hrách, zahltenosť romantickými telenovelami).{' '}
                  </span>
                </p>

                <h3 className='text-white text-[25px]'>Rozhodni sa správne!</h3>
                <p>
                  Tvoja duša je vzácna, neostávaj v satanovom zvode. Nezatváraj
                  pred tým oči. Tým, že sa budeš snažiť v to neveriť, nespôsobíš
                  jeho zánik. Aj Neo v Matrixe stál pred voľbou. Modrá alebo
                  červená? Milosrdná ilúzia alebo krutá realita?
                </p>
                <p className='mt-4'>
                  Prajem ti, aby si získal pravú slobodu, ktorá je len v
                  Ježišovi Kristovi, pretože On je Život a len On je Cesta k
                  nemu.
                  <span className='italic'>
                    {' '}
                    Ja som cesta i pravda i život.{' '}
                  </span>
                  <span className='text-[15px]'> Ján 14:6 </span>
                  Potom ťa zaplaví skutočný pokoj, ktorý podvedome stále hľadáš.
                </p>
              </div>
              <Footer />
            </div>
          </>
        )}
      </div>
      <CookieConsent
        location='bottom'
        style={{
          background: '#000000',
          color: '#f1bf41',
          fontSize: '18px',
          textAlign: 'justify',
          border: '1px solid #ffffff',
        }}
        buttonStyle={{
          background: '#39bb2f',
          color: '#fff',
          fontSize: '20px',
          padding: '2.5px 5px',
        }}
        buttonText={language === 'slovak' ? 'Pokračovať' : 'Continue'}
        expires={365}
        onAccept={() => {
          setCookieAccept(true)
          increaseVisitorsCount()
        }}
      >
        {language === 'slovak'
          ? 'Táto stránka nezhromažďuje žiadne údaje'
          : 'This site does not collect any information'}
      </CookieConsent>
    </>
  )
}

export default Home
