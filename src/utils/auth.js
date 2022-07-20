class ApiAuth {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
    getResponse(res) {
        if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    register = (password, email) => {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers:this._headers,
            body: JSON.stringify({password, email})
        })
            .then((res) => {
                console.log(res)
                return this.getResponse(res)
            })
    };
    authorization = (password, email) => {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({password, email})
        })
            .then((res) => {
                return this.getResponse(res)
            })
    }
    validityToken = (token) => {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
            .then((res) => {
                return this.getResponse(res)
            })
    }

}

export const apiAuth = new ApiAuth({
    baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`,
    headers: {
        "Content-Type": "application/json",
    },
});