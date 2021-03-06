import ENDPOINTS from './endpoints';
import { getCookie } from './utils';

class API {
  constructor() {
    this.endpoints = ENDPOINTS;
  }

  async updateSkills(data) {
    try {
      const csrftoken = getCookie('csrftoken');
      const response = await fetch(this.endpoints.skills.list, {
        method: 'PATCH',
        cache: 'no-cache',
        headers: {
          'X-CSRFToken': csrftoken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const returnData = await response.json();
      return {
        status: response.status,
        data: returnData,
      };
    } catch (error) {
      return null;
    }
  }

  async retrieveSkills() {
    try {
      const response = await fetch(
        `${this.endpoints.skills.list}`,
      );
      if (!response.ok) {
        return null;
      }
      return response.json();
    } catch (error) {
      return null;
    }
  }

  /* eslint-disable class-methods-use-this */
  async retrieveProjects() {
    try {
      const response = await fetch(
        `${this.endpoints.projects.list}`,
      );
      if (!response.ok) {
        return null;
      }
      return response.json();
    } catch (error) {
      return null;
    }
  }

  async createProject(data) {
    try {
      const csrftoken = getCookie('csrftoken');
      const response = await fetch(`${this.endpoints.projects.list}`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'X-CSRFToken': csrftoken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const returnData = await response.json();
      return {
        status: response.status,
        data: returnData,
      };
    } catch (error) {
      return null;
    }
  }

  async updateAllProjects(data) {
    try {
      const csrftoken = getCookie('csrftoken');
      const response = await fetch(`${this.endpoints.projects.list}batch_update/`, {
        method: 'PATCH',
        cache: 'no-cache',
        headers: {
          'X-CSRFToken': csrftoken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const returnData = await response.json();
      return {
        status: response.status,
        data: returnData,
      };
    } catch (error) {
      return null;
    }
  }

  async deleteProject(id) {
    try {
      const csrftoken = getCookie('csrftoken');
      const response = await fetch(`${this.endpoints.projects.list}${id}/`, {
        method: 'DELETE',
        cache: 'no-cache',
        headers: {
          'X-CSRFToken': csrftoken,
          'Content-Type': 'application/json',
        },
      });
      const returnData = await response.json();
      return {
        status: response.status,
        data: returnData,
      };
    } catch (error) {
      return null;
    }
  }

  async updateProject(data, id) {
    try {
      const csrftoken = getCookie('csrftoken');
      const response = await fetch(`${this.endpoints.projects.list}${id}/`, {
        method: 'PATCH',
        cache: 'no-cache',
        headers: {
          'X-CSRFToken': csrftoken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const returnData = await response.json();
      return {
        status: response.status,
        data: returnData,
      };
    } catch (error) {
      return null;
    }
  }

  async retrievePaginatedProjects(page) {
    try {
      const response = await fetch(
        `${this.endpoints.projects.paginated}?page=${page}`,
      );
      if (!response.ok) {
        return null;
      }
      return response.json();
    } catch (error) {
      return null;
    }
  }

  async submitContactMe(data) {
    try {
      const csrftoken = getCookie('csrftoken');
      const response = await fetch(this.endpoints.contactMe, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'X-CSRFToken': csrftoken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return {
        status: response.status,
        data: response.json(),
      };
    } catch (error) {
      return null;
    }
  }

  async retrieveFooterData() {
    try {
      const response = await fetch(
        `${this.endpoints.footersstats.list}`,
      );
      if (!response.ok) {
        return null;
      }
      return response.json();
    } catch (error) {
      return null;
    }
  }

  async retrieveExperience() {
    try {
      const response = await fetch(
        `${this.endpoints.experience.list}`,
      );
      if (!response.ok) {
        return null;
      }
      return response.json();
    } catch (error) {
      return null;
    }
  }
}

const apiInstance = new API();

export default apiInstance;
