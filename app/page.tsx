import SectionOne from "@/app/ui/section-home/section-one";
import SectionTwo from "@/app/ui/section-home/section-two";
import SectionThree from "@/app/ui/section-home/section-three";
import SectionFour from "@/app/ui/section-home/section-four";
import SectionFive from "@/app/ui/section-home/section-five";
import TestBar from "@/app/components/test-bar/test-bar";

export default function Home() {
    return (
        <>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <SectionThree></SectionThree>
            <SectionFour></SectionFour>
            <SectionFive></SectionFive>
        </>
    );
}
