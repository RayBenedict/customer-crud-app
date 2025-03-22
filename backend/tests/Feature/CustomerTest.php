<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Customer;

class CustomerTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /** @test */
    public function it_can_create_a_customer()
    {
        $data = [
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'email' => $this->faker->unique()->safeEmail,
            'contact_number' => $this->faker->phoneNumber
        ];

        $response = $this->postJson('/api/customers', $data);

        $response->assertStatus(201)
                 ->assertJsonFragment(['email' => $data['email']]);
    }

    /** @test */
    public function it_can_get_all_customers()
    {
        Customer::factory()->count(3)->create();

        $response = $this->getJson('/api/customers');

        $response->assertStatus(200)
                 ->assertJsonCount(3);
    }

    /** @test */
    public function it_can_update_a_customer()
    {
        $customer = Customer::factory()->create();
        $updateData = ['first_name' => 'UpdatedName'];

        $response = $this->putJson("/api/customers/{$customer->id}", $updateData);

        $response->assertStatus(200)
                 ->assertJsonFragment(['first_name' => 'UpdatedName']);
    }

    /** @test */
    public function it_can_delete_a_customer()
    {
        $customer = Customer::factory()->create();

        $response = $this->deleteJson("/api/customers/{$customer->id}");

        $response->assertStatus(200);
        $this->assertDatabaseMissing('customers', ['id' => $customer->id]);
    }
}
