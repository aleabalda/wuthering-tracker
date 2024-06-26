import guidebook from "../assets/images/guidebook.png";
import pioneer from "../assets/images/pioneer_podcast_ww.png";
import daily from "../assets/images/daily_quest.webp";
import tower from "../assets/images/tower_ww.png";
import waveplates from "../assets/images/waveplates_ww.png";
import scar from "../assets/images/scar_ww.png";
import depths from "../assets/images/depths_realm.png";
import alloy from "../assets/images/alloy_smelt.png";
import secondComing from "../assets/images/second_coming.png";
import voyages from "../assets/images/voyage_begin.png";
import awakening from "../assets/images/yangyang.png";
import solitary from "../assets/images/solitary_path.png";
import ascendant from "../assets/images/yinlin.png";
import exploration from "../assets/images/wuthering_exploration.png";
import chordCleansing from "../assets/images/chord_cleansing.png";
import yuanwu from "../assets/images/yuanwu.png";

const dailyEndDate = "Daily Reset";
const weeklyEndDate = "Weekly Reset";

export const TaskData = {
  Daily: [
    {
      icon: waveplates,
      title: "Waveplates",
      description:
        "Make sure to use as many waveplates as possible (ideally all 240).",
      endDate: dailyEndDate,
    },
    {
      icon: guidebook,
      title: "Guidebook",
      description:
        "Go through activities in the guidebook and complete them until achieving 100 points for all the rewards.",
      endDate: dailyEndDate,
    },
    {
      icon: daily,
      title: "Daily Quest(s)",
      description:
        "Do the daily quest(s). It will give you decent rewards and 40 activity points for your guidebook.",
      endDate: dailyEndDate,
    },
    {
      icon: pioneer,
      title: "Daily Pioneer Podcast Highlights.",
      description:
        "Go through the Pioneer Podcast daily highlights and complete all of them to gain optimal battle pass experience.",
      endDate: dailyEndDate,
    },
  ],
  Weekly: [
    {
      icon: scar,
      title: "Weekly bosses",
      description:
        "Defeat the weekly bosses, currently 3 (Bell Borne, Scar, Statue of Crownless), ideally all 3 claims for each boss.",
      endDate: weeklyEndDate,
    },
    {
      icon: pioneer,
      title: "Pioneer Podcast Weekly Highlights",
      description:
        "Go through the Pioneer Podcast weekly tasks and complete as many as you can/need for Pioneer Podcast experience.",
      endDate: weeklyEndDate,
    },
    {
      icon: tower,
      title: "Tower of Adversity",
      description:
        "Go through the tower of adversity levels and complete as many as you can.",
      endDate: weeklyEndDate,
    },
  ],
  Events: [
    {
      icon: exploration,
      title: "Wuthering Exploration",
      description: "2 quests to be done daily",
      endDate: "06/27",
    },
    {
      icon: depths,
      title: "Depths of Illusive Realm",
      description:
        "Complete all the levels and as many challenges as possible/necessary to clear out the shop.",
      endDate: "06/27",
    },
    {
      icon: yuanwu,
      title: "Rumbling Hollows",
      description:
        "Complete Tower of Adversity Stable Zone and Experiment Zone",
      endDate: "None",
    },
    {
      icon: ascendant,
      title: "Ascendant Aces",
      description: "Demo all the limited banner characters to receive rewards",
      endDate: "06/26",
    },
    {
      icon: solitary,
      title: "Solitary Path",
      description:
        "Yinlin's Storyline; complete it to receive rewards such as union exp and asterite.",
      endDate: "06/26",
    },
    {
      icon: alloy,
      title: "Alloy Smelt",
      description:
        "Complete all stages of this event dungeon to receive all rewards possible.",
      endDate: "06/27",
    },
    {
      icon: secondComing,
      title: "Second Coming of Solaris",
      description: "Talk to Maqi and turn in rewards",
      endDate: "06/27",
    },
    {
      icon: chordCleansing,
      title: "Chord Cleansing",
      description: "Double drops for tacet fields, 3 times maximum.",
      endDate: "06/27",
    },
    {
      icon: awakening,
      title: "Awakening Journey",
      description: "One-time event, reach Union level 45",
      endDate: "None",
    },
    {
      icon: voyages,
      title: "Voyagers Beginning",
      description: "Complete all intro events and quests",
      endDate: "None",
    },
    {
      icon: pioneer,
      title: "Pioneer Podcast Seasonal Highlights",
      description:
        "Complete all the seasonal highlights in the Pioneer Podcast for rewards.",
      endDate: "Depends on events.",
    },
  ],
};
