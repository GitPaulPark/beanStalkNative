import axios from "axios";

const URL = 'https://npc1.mamspace.ai/';
const SUB_URL = {
    TTS: 'tts'
};
export const voiceList =
    [
        {value: 'ko_KR-omh-medium'},
        {value: 'ko_KR-kma-medium'},
        {value: 'en_US-amy-medium'},
        {value: 'en_US-arctic-medium'},
        {value: 'en_US-danny-low'},
        {value: 'en_US-ryan-high'},
        {value: 'en_US-libritts-high'},
        {value: 'en_US-joe-medium'},
        {value: 'en_US-kathleen-low'},
        {value: 'en_US-lessac-medium'},
        {value: 'en_US-kusal-medium'},
        {value: 'en_GB-northern_english_male-medium'},
        {value: 'en_GB-alba-medium'},
        {value: 'en_GB-southern_english_female-low'},
        {value: 'en_GB-alan-low'},
        {value: 'en_GB-semaine-medium'},
        {value: 'ja-JP'},
        {value: 'ja_JP-amitaro-0'},
        {value: 'ko_KR-OES-0'},
        {value: 'ko_KR-JCH-0'},
        {value: 'ko_KR-AIHUB-0'},
        {value: 'ko_KR-AIHUB-1'},
        {value: 'ko_KR-AIHUB-2'},
        {value: 'ko_KR-AIHUB-3'},
        {value: 'ko_KR-AIHUB-4'},
        {value: 'ko_KR-AIHUB-5'},
        {value: 'ko_KR-AIHUB-6'},
        {value: 'ko_KR-AIHUB-7'},
        {value: 'ko_KR-AIHUB-8'},
        {value: 'ko_KR-AIHUB-9'},
        {value: 'ko_KR-AIHUB-10'},
        {value: 'ko_KR-AIHUB-11'},
        {value: 'ko_KR-AIHUB-12'},
        {value: 'ko_KR-AIHUB-13'},
        {value: 'ko_KR-AIHUB-14'},
        {value: 'ko_KR-AIHUB-15'},
        {value: 'ko_KR-AIHUB-16'},
        {value: 'ko_KR-AIHUB-17'},
        {value: 'ko_KR-AIHUB-18'},
        {value: 'ko_KR-AIHUB-19'},
        {value: 'ko_KR-AIHUB-20'},
        {value: 'ko_KR-AIHUB-21'},
        {value: 'ko_KR-AIHUB-22'},
        {value: 'ko_KR-AIHUB-23'},
        {value: 'ko_KR-AIHUB-24'},
        {value: 'ko_KR-AIHUB-25'},
        {value: 'ko_KR-AIHUB-26'},
        {value: 'ko_KR-AIHUB-27'},
        {value: 'ko_KR-AIHUB-28'},
        {value: 'ko_KR-AIHUB-29'},
        {value: 'ko_KR-AIHUB-30'},
        {value: 'ko_KR-AIHUB-31'},
        {value: 'ko_KR-AIHUB-32'},
        {value: 'ko_KR-POLITICIAN-0'},
        {value: 'ko_KR-POLITICIAN-1'},
        {value: 'ko_KR-POLITICIAN-2'},
        {value: 'ko_KR-POLITICIAN-3'},
        {value: 'ko_KR-POLITICIAN-4'},
        {value: 'ko_KR-POLITICIAN-5'},
        {value: 'ko_KR-POLITICIAN-6'},
        {value: 'ko_KR-POLITICIAN-7'},
        {value: 'ko_KR-POLITICIAN-8'},
        {value: 'ko_KR-POLITICIAN-9'},
        {value: 'ko_KR-POLITICIAN-10'},
        {value: 'ko_KR-POLITICIAN-11'},
        {value: 'ko_KR-POLITICIAN-12'},
        {value: 'ko_KR-POLITICIAN-13'},
        {value: 'ko_KR-POLITICIAN-14'},
        {value: 'ko_KR-POLITICIAN-15'},
        {value: 'ko_KR-POLITICIAN-16'},
        {value: 'ko_KR-POLITICIAN-17'},
        {value: 'ko_KR-POLITICIAN-18'},
        {value: 'ko_KR-POLITICIAN-19'},
        {value: 'ko_KR-POLITICIAN-20'},
        {value: 'ko_KR-POLITICIAN-21'},
        {value: 'ko_KR-POLITICIAN-22'},
        {value: 'ko_KR-POLITICIAN-23'},
        {value: 'ko_KR-POLITICIAN-24'},
        {value: 'ko_KR-POLITICIAN-25'},
        {value: 'ko_KR-POLITICIAN-26'},
        {value: 'ko_KR-POLITICIAN-27'},
        {value: 'ko_KR-POLITICIAN-28'},
        {value: 'ko_KR-POLITICIAN-29'},
        {value: 'ko_KR-POLITICIAN-30'},
        {value: 'ko_KR-POLITICIAN-31'},
        {value: 'ko_KR-POLITICIAN-32'},
        {value: 'ko_KR-POLITICIAN-33'},
        {value: 'ko_KR-POLITICIAN-34'},
        {value: 'ko_KR-POLITICIAN-35'},
        {value: 'ko_KR-POLITICIAN-36'},
        {value: 'ko_KR-POLITICIAN-37'},
        {value: 'ko_KR-POLITICIAN-38'},
        {value: 'ko_KR-POLITICIAN-39'},
        {value: 'ko_KR-POLITICIAN-40'},
        {value: 'ko_KR-POLITICIAN-41'},
        {value: 'ko_KR-POLITICIAN-42'},
        {value: 'ko_KR-POLITICIAN-43'},
        {value: 'ko_KR-POLITICIAN-44'}

    ];


class Tts_Gj_Util {
    constructor() {
        this.param = {
            text: "",
            language: "",
            voice_type: "en_US-arctic-medium",
        }
    }

    setText = (value) => {
        this.param.text = value;
    }
    setVoice = (voice) => {
        this.param.voice_type = voice;
    }
    setLanguage = (lang) => {
        this.param.language = lang;

    }

    requestAudio(text, lang = "", voice = "en_GB-northern_english_male-medium", callback) {
        this.setText(text);
        this.setVoice(voice);
        this.setLanguage(lang);
        const url = URL + SUB_URL.TTS;
        let response;
        try {
            console.log(this.param)
            axios.post(url, this.param)
                .then((res) => {
                    response = res;
                    console.log(res);
                    callback && callback(res.data);
                });
        } catch (e) {
            console.warn(e);
        }
        return response;
    }
}

export const TTSGY_UTIL = new Tts_Gj_Util();
