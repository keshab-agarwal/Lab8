const formatVolumeIconPath = require('../assets/scripts/main');

describe("Test Icon for different Volumes", ()=>{
    test("Maximum Volume", ()=>{
        expect(formatVolumeIconPath(100)).toBe("./assets/media/icons/volume-level-3.svg");
    });
    test("Volume 67 - Edge", ()=>{
        expect(formatVolumeIconPath(67)).toBe("./assets/media/icons/volume-level-3.svg");
    });
    test("Volume 66 - Edge", ()=>{
        expect(formatVolumeIconPath(66)).toBe("./assets/media/icons/volume-level-2.svg");
    });
    test("Half Volume", ()=>{
        expect(formatVolumeIconPath(50)).toBe("./assets/media/icons/volume-level-2.svg");
    });
    test("Volume 34 - Edge", ()=>{
        expect(formatVolumeIconPath(34)).toBe("./assets/media/icons/volume-level-2.svg");
    });
    test("Volume 33 - Edge", ()=>{
        expect(formatVolumeIconPath(33)).toBe("./assets/media/icons/volume-level-1.svg");
    });
    test("Quarter Volume", ()=>{
        expect(formatVolumeIconPath(25)).toBe("./assets/media/icons/volume-level-1.svg");
    });
    test("Zero Volume", ()=>{
        expect(formatVolumeIconPath(0)).toBe("./assets/media/icons/volume-level-0.svg");
    });
});
