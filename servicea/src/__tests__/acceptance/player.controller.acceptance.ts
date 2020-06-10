import { Application } from '../..';
import {Client, expect} from '@loopback/testlab';
import { setupApplication } from './test-helper';

describe('PlayerController', () => {
    let app: Application;
    let client: Client;

    before('setupApplication', async () => {
        ({app, client} = await setupApplication());
    });

    after(async () => {
        await app.stop();
    });

    it('invokes POST /player/me', async () => {
        const res = await client.post('/player/me').expect(200);
        expect(res.body).to.equal('max');
    });
});
