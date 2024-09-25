import type { Schema, Attribute } from '@strapi/strapi';

export interface PageFeedback extends Schema.Component {
  collectionName: 'components_page_feedbacks';
  info: {
    displayName: 'Feedback';
    icon: 'discuss';
  };
  attributes: {
    Picture: Attribute.Media & Attribute.Required;
    Feedback: Attribute.Text & Attribute.Required;
    Name: Attribute.String & Attribute.Required;
    Role: Attribute.String & Attribute.Required;
    Company: Attribute.String & Attribute.Required;
  };
}

export interface PagePageHeader extends Schema.Component {
  collectionName: 'components_page_page_headers';
  info: {
    displayName: 'Header';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    BackgroundMedia: Attribute.Media;
    Title: Attribute.String & Attribute.Required;
    Client: Attribute.String;
    Design_Animation: Attribute.String & Attribute.DefaultTo<'Sakada'>;
  };
}

export interface PageTeam extends Schema.Component {
  collectionName: 'components_team_teams';
  info: {
    displayName: 'Team';
    icon: 'heart';
    description: '';
  };
  attributes: {
    Employee: Attribute.Component<'team.employee', true>;
  };
}

export interface TeamEmployee extends Schema.Component {
  collectionName: 'components_employee_employees';
  info: {
    displayName: 'Employee';
    icon: 'user';
    description: '';
  };
  attributes: {
    Picture: Attribute.Media & Attribute.Required;
    Name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'First_Name Last_Name'>;
    Description: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.feedback': PageFeedback;
      'page.page-header': PagePageHeader;
      'page.team': PageTeam;
      'team.employee': TeamEmployee;
    }
  }
}
