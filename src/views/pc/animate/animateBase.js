
import firstEmo from '@/assets/animate/emoticon/1.png'
import secondEmo from '@/assets/animate/emoticon/2.png'
import thirdEmo from '@/assets/animate/emoticon/3.png'
import fourthEmo from '@/assets/animate/emoticon/4.png'
import fifthEmo from '@/assets/animate/emoticon/5.png'
import sixthEmo from '@/assets/animate/emoticon/6.png'
import seventhEmo from '@/assets/animate/emoticon/7.png'
import eighthEmo from '@/assets/animate/emoticon/8.png'
import ninthEmo from '@/assets/animate/emoticon/9.png'
import tenthEmo from '@/assets/animate/emoticon/10.png'
const base = {
  data() {
    return {
      emoticonList: [
        firstEmo, secondEmo, thirdEmo, fourthEmo, fifthEmo, sixthEmo, seventhEmo, eighthEmo, ninthEmo, tenthEmo,
        firstEmo, secondEmo, thirdEmo, fourthEmo, fifthEmo, sixthEmo, seventhEmo, eighthEmo, ninthEmo, tenthEmo,
        firstEmo, secondEmo, thirdEmo, fourthEmo, fifthEmo, sixthEmo, seventhEmo, eighthEmo, ninthEmo, tenthEmo,
        firstEmo, secondEmo, thirdEmo, fourthEmo, fifthEmo, sixthEmo, seventhEmo, eighthEmo, ninthEmo, tenthEmo
      ],
    }
  },
  computed: {
  },
  methods: {
    getRandomEmoticon (idx) {
      // const idx = Math.ceil(Math.random() * 10)
      return this.emoticonList[idx]
    }
  }
}
export default base;
