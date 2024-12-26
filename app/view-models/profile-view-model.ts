import { Observable } from '@nativescript/core';
import { UserProfile } from '../models/user.model';

export class ProfileViewModel extends Observable {
  private _userProfile: UserProfile;

  constructor() {
    super();
    this._userProfile = new UserProfile();
  }

  get userProfile(): UserProfile {
    return this._userProfile;
  }

  saveProfile(name: string, annualIncome: number) {
    this._userProfile.name = name;
    this._userProfile.annualIncome = annualIncome;
  }
}