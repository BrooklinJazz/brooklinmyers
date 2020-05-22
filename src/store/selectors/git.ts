import { AppState } from "..";
import { createSelector } from "reselect";

export const selectGit = (state: AppState) => state.git

export const selectContributions = createSelector(
    selectGit,
    git => git.contributions
)