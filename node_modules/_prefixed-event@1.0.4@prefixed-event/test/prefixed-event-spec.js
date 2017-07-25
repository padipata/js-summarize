describe('PrefixedEvent',function(){

    'use strict';

    var expect = chai.expect
    var should = chai.should()
    var prefixedEvent = require('../lib/prefixed-event')
    var detectcss = require('detectcss')
    var util = require('util')

    describe('when adding an event listener',function(){
        var el
        beforeEach(function(){
            el = document.createElement('div')
            el.appendChild(document.createTextNode('PREFIX ME'))
            var body = document.querySelector('body')
            body.appendChild(el)
            el.style.width = '200px'
            el.style.position = 'absolute'
            el.style.left = '0px'
            el.style[detectcss.prefixed('transition')] = 'left .5s'
        })

        it('should support transitionEnd',function(done){
            prefixedEvent.add(el, 'TransitionEnd',function(e){
                e.propertyName.should.equal('left')
                e.elapsedTime = 0.5
                done()
            })
            setTimeout(function(){
                el.style.left = '400px';
            }, 1000)
        })

    })
    describe('when removing an event listener',function(){
        var el
        beforeEach(function(){
            el = document.createElement('div')
            el.appendChild(document.createTextNode('PREFIX ME'))
            var body = document.querySelector('body')
            body.appendChild(el)
            el.style.width = '200px'
            el.style.position = 'absolute'
            el.style.left = '0px'
            el.style[detectcss.prefixed('transition')] = 'left .5s'
        })

        it('should support transitionEnd',function(done){
            this.timeout(2500)
            var emitted = 0
                ,transitioned = 0
            function goLeft(){
                setTimeout(function(){
                    el.style.left = parseInt(el.style.left,10) + 1 + 'px'
                    transitioned++
                }, 50)
            }
            function handleTransition(e) {
                emitted++
                prefixedEvent.remove(el, 'TransitionEnd', handleTransition)
                goLeft()
            }

            prefixedEvent.add(el, 'TransitionEnd',handleTransition)

            goLeft()
            setTimeout(function(){
                emitted.should.equal(1)
                transitioned.should.be.at.least(2)
                done()
            }, 2000)

        })

    })

})
