import ciDetect from "@npmcli/ci-detect";

export function isCI() {
    return ciDetect();
}