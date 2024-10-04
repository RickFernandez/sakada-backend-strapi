import type { Schema, Attribute } from '@strapi/strapi';

export interface PageClientBlock extends Schema.Component {
  collectionName: 'components_page_client_blocks';
  info: {
    displayName: 'clientBlock';
  };
  attributes: {
    client: Attribute.Component<'page.client', true>;
  };
}

export interface PageClient extends Schema.Component {
  collectionName: 'components_page_clients';
  info: {
    displayName: 'client';
    icon: '';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
  };
}

export interface PageFeedback extends Schema.Component {
  collectionName: 'components_page_feedbacks';
  info: {
    displayName: 'Feedback';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    picture: Attribute.Media & Attribute.Required;
    feedback: Attribute.Text & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    role: Attribute.String & Attribute.Required;
    company: Attribute.String & Attribute.Required;
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
    backgroundMedia: Attribute.Media;
    title: Attribute.String & Attribute.Required;
    client: Attribute.String;
    design_animation: Attribute.String & Attribute.DefaultTo<'Sakada'>;
    titleColorCode: Attribute.String;
  };
}

export interface PageSimpleContent extends Schema.Component {
  collectionName: 'components_page_simple_contents';
  info: {
    displayName: 'simple content';
    icon: 'file';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.RichText;
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
    employee: Attribute.Component<'team.employee', true>;
  };
}

export interface PageTopics extends Schema.Component {
  collectionName: 'components_page_topics';
  info: {
    displayName: 'topics';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    simple_content: Attribute.Component<'page.simple-content', true>;
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
    picture: Attribute.Media & Attribute.Required;
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'First_Name Last_Name'>;
    description: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.client-block': PageClientBlock;
      'page.client': PageClient;
      'page.feedback': PageFeedback;
      'page.page-header': PagePageHeader;
      'page.simple-content': PageSimpleContent;
      'page.team': PageTeam;
      'page.topics': PageTopics;
      'team.employee': TeamEmployee;
    }
  }
}
