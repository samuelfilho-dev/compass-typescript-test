import { OtherStringUtils, calculateComplexity, toUpperCaseWithCb } from "../../app/doubles/OtherUtils";

describe.skip('Other Test Suit',() => {

    describe('OtherStringUtils test with spies', () => {
        let sut: OtherStringUtils;

        beforeEach(() => {
            sut = new OtherStringUtils();
        });

        test('Use a spy to track calls', () => {
            const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
            sut.toUpperCase('asa');

            expect(toUpperCaseSpy).toHaveBeenCalledWith('asa');
        });

        test('Use a spy to track calls to other module', () => {
            const consoleLogSpy = jest.spyOn(console, 'log');
            sut.logString('abc');

            expect(consoleLogSpy).toHaveBeenCalledWith('abc');
        });

        test('Use a spy to replace the implementation of a method', () => {
            jest.spyOn(sut, 'callExternalService').mockImplementation(() => {
                console.log('calling mock implementation !!!');
            });

            sut.callExternalService();
            
        });

    });
    
    describe('Tracking callbacks with Jest Mocks', () => {
        const callBackMock = jest.fn();

        afterEach(() => {
            jest.clearAllMocks();
        });

        it('Calls callback for invalid argument - track calls', () => {
            const actual = toUpperCaseWithCb('', callBackMock);

            expect(actual).toBeUndefined();
            expect(callBackMock).toHaveBeenCalledWith('Invalid Argument');
            expect(callBackMock).toHaveBeenCalledTimes(1);
        });
        
        it('calls callback for valid argument - track calls', () => {
            const actual = toUpperCaseWithCb('abc', callBackMock);

            expect(actual).toBe('ABC');
            expect(callBackMock).toHaveBeenCalledWith('Call function with abc');
            expect(callBackMock).toHaveBeenCalledTimes(1);
        });
    });
    
    describe('Tracking callbacks', () => {
        let cbArgs = [];
        let timesCalled = 0;

        function callBackMock(arg: string) {
            cbArgs.push(arg);
            timesCalled++;
        }

        afterEach(() => {
            cbArgs = [];
            timesCalled = 0;
        });
        
        it('Calls callback for invalid argument - track calls', () => {
            const actual = toUpperCaseWithCb('', callBackMock);

            expect(actual).toBeUndefined();
            expect(cbArgs).toContain('Invalid Argument');
            expect(timesCalled).toBe(1);
        });
        
        it('calls callback for valid argument - track calls', () => {
            const actual = toUpperCaseWithCb('abc', callBackMock);

            expect(actual).toBe('ABC');
            expect(cbArgs).toContain('Call function with abc');
            expect(timesCalled).toBe(1);
        });

    });

    it('ToUpperCase - calls callback for invalid argument', () => {
        const actual = toUpperCaseWithCb('', () => {});
        expect(actual).toBeUndefined();
    });

    it('ToUpperCase - calls callback for valid argument', () => {
        const actual = toUpperCaseWithCb('abc', () => {});
        expect(actual).toBe('ABC');
    });

    it('Calculate Complexity', () => {
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: 'someInfo',
                field2: 'someOtherInfo'
            }
        }

        const acutal = calculateComplexity(someInfo as any);
        expect(acutal).toBe(10);
    });
});