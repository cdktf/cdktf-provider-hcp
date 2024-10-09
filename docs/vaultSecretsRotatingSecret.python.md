# `vaultSecretsRotatingSecret` Submodule <a name="`vaultSecretsRotatingSecret` Submodule" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsRotatingSecret <a name="VaultSecretsRotatingSecret" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret hcp_vault_secrets_rotating_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_rotating_secret

vaultSecretsRotatingSecret.VaultSecretsRotatingSecret(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_name: str,
  integration_name: str,
  name: str,
  rotation_policy_name: str,
  secret_provider: str,
  aws_access_keys: VaultSecretsRotatingSecretAwsAccessKeys = None,
  gcp_service_account_key: VaultSecretsRotatingSecretGcpServiceAccountKey = None,
  mongodb_atlas_user: VaultSecretsRotatingSecretMongodbAtlasUser = None,
  project_id: str = None,
  twilio_api_key: VaultSecretsRotatingSecretTwilioApiKey = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.appName">app_name</a></code> | <code>str</code> | Vault Secrets application name that owns the secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.integrationName">integration_name</a></code> | <code>str</code> | The Vault Secrets integration name with the capability to manage the secret's lifecycle. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.name">name</a></code> | <code>str</code> | The Vault Secrets secret name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.rotationPolicyName">rotation_policy_name</a></code> | <code>str</code> | Name of the rotation policy that governs the rotation of the secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.secretProvider">secret_provider</a></code> | <code>str</code> | The third party platform the dynamic credentials give access to. One of `aws` or `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.awsAccessKeys">aws_access_keys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a></code> | AWS configuration to manage the access key rotation for the given IAM user. Required if `secret_provider` is `aws`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.gcpServiceAccountKey">gcp_service_account_key</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a></code> | GCP configuration to manage the service account key rotation for the given service account. Required if `secret_provider` is `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.mongodbAtlasUser">mongodb_atlas_user</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a></code> | MongoDB Atlas configuration to manage the user password rotation on the given database. Required if `secret_provider` is `mongodb_atlas`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.twilioApiKey">twilio_api_key</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a></code> | Twilio configuration to manage the api key rotation on the given account. Required if `secret_provider` is `twilio`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.appName"></a>

- *Type:* str

Vault Secrets application name that owns the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#app_name VaultSecretsRotatingSecret#app_name}

---

##### `integration_name`<sup>Required</sup> <a name="integration_name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.integrationName"></a>

- *Type:* str

The Vault Secrets integration name with the capability to manage the secret's lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#integration_name VaultSecretsRotatingSecret#integration_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.name"></a>

- *Type:* str

The Vault Secrets secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#name VaultSecretsRotatingSecret#name}

---

##### `rotation_policy_name`<sup>Required</sup> <a name="rotation_policy_name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.rotationPolicyName"></a>

- *Type:* str

Name of the rotation policy that governs the rotation of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#rotation_policy_name VaultSecretsRotatingSecret#rotation_policy_name}

---

##### `secret_provider`<sup>Required</sup> <a name="secret_provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.secretProvider"></a>

- *Type:* str

The third party platform the dynamic credentials give access to. One of `aws` or `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#secret_provider VaultSecretsRotatingSecret#secret_provider}

---

##### `aws_access_keys`<sup>Optional</sup> <a name="aws_access_keys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.awsAccessKeys"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a>

AWS configuration to manage the access key rotation for the given IAM user. Required if `secret_provider` is `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#aws_access_keys VaultSecretsRotatingSecret#aws_access_keys}

---

##### `gcp_service_account_key`<sup>Optional</sup> <a name="gcp_service_account_key" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.gcpServiceAccountKey"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a>

GCP configuration to manage the service account key rotation for the given service account. Required if `secret_provider` is `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#gcp_service_account_key VaultSecretsRotatingSecret#gcp_service_account_key}

---

##### `mongodb_atlas_user`<sup>Optional</sup> <a name="mongodb_atlas_user" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.mongodbAtlasUser"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a>

MongoDB Atlas configuration to manage the user password rotation on the given database. Required if `secret_provider` is `mongodb_atlas`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#mongodb_atlas_user VaultSecretsRotatingSecret#mongodb_atlas_user}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.projectId"></a>

- *Type:* str

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#project_id VaultSecretsRotatingSecret#project_id}

---

##### `twilio_api_key`<sup>Optional</sup> <a name="twilio_api_key" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.twilioApiKey"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a>

Twilio configuration to manage the api key rotation on the given account. Required if `secret_provider` is `twilio`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#twilio_api_key VaultSecretsRotatingSecret#twilio_api_key}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putAwsAccessKeys">put_aws_access_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putGcpServiceAccountKey">put_gcp_service_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putMongodbAtlasUser">put_mongodb_atlas_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putTwilioApiKey">put_twilio_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetAwsAccessKeys">reset_aws_access_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetGcpServiceAccountKey">reset_gcp_service_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetMongodbAtlasUser">reset_mongodb_atlas_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetTwilioApiKey">reset_twilio_api_key</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws_access_keys` <a name="put_aws_access_keys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putAwsAccessKeys"></a>

```python
def put_aws_access_keys(
  iam_username: str
) -> None
```

###### `iam_username`<sup>Required</sup> <a name="iam_username" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putAwsAccessKeys.parameter.iamUsername"></a>

- *Type:* str

AWS IAM username to rotate the access keys for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#iam_username VaultSecretsRotatingSecret#iam_username}

---

##### `put_gcp_service_account_key` <a name="put_gcp_service_account_key" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putGcpServiceAccountKey"></a>

```python
def put_gcp_service_account_key(
  service_account_email: str
) -> None
```

###### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putGcpServiceAccountKey.parameter.serviceAccountEmail"></a>

- *Type:* str

GCP service account email to impersonate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#service_account_email VaultSecretsRotatingSecret#service_account_email}

---

##### `put_mongodb_atlas_user` <a name="put_mongodb_atlas_user" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putMongodbAtlasUser"></a>

```python
def put_mongodb_atlas_user(
  database_name: str,
  project_id: str,
  roles: typing.List[str]
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putMongodbAtlasUser.parameter.databaseName"></a>

- *Type:* str

MongoDB Atlas database or cluster name to rotate the username and password for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#database_name VaultSecretsRotatingSecret#database_name}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putMongodbAtlasUser.parameter.projectId"></a>

- *Type:* str

MongoDB Atlas project ID to rotate the username and password for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#project_id VaultSecretsRotatingSecret#project_id}

---

###### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putMongodbAtlasUser.parameter.roles"></a>

- *Type:* typing.List[str]

MongoDB Atlas roles to assign to the rotating user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#roles VaultSecretsRotatingSecret#roles}

---

##### `put_twilio_api_key` <a name="put_twilio_api_key" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putTwilioApiKey"></a>

```python
def put_twilio_api_key() -> None
```

##### `reset_aws_access_keys` <a name="reset_aws_access_keys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetAwsAccessKeys"></a>

```python
def reset_aws_access_keys() -> None
```

##### `reset_gcp_service_account_key` <a name="reset_gcp_service_account_key" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetGcpServiceAccountKey"></a>

```python
def reset_gcp_service_account_key() -> None
```

##### `reset_mongodb_atlas_user` <a name="reset_mongodb_atlas_user" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetMongodbAtlasUser"></a>

```python
def reset_mongodb_atlas_user() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_twilio_api_key` <a name="reset_twilio_api_key" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetTwilioApiKey"></a>

```python
def reset_twilio_api_key() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VaultSecretsRotatingSecret resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_rotating_secret

vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_rotating_secret

vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_rotating_secret

vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_rotating_secret

vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VaultSecretsRotatingSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VaultSecretsRotatingSecret to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VaultSecretsRotatingSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsRotatingSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeys">aws_access_keys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference">VaultSecretsRotatingSecretAwsAccessKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKey">gcp_service_account_key</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference">VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUser">mongodb_atlas_user</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference">VaultSecretsRotatingSecretMongodbAtlasUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKey">twilio_api_key</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference">VaultSecretsRotatingSecretTwilioApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appNameInput">app_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeysInput">aws_access_keys_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKeyInput">gcp_service_account_key_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationNameInput">integration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUserInput">mongodb_atlas_user_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyNameInput">rotation_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProviderInput">secret_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKeyInput">twilio_api_key_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appName">app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationName">integration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyName">rotation_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProvider">secret_provider</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_access_keys`<sup>Required</sup> <a name="aws_access_keys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeys"></a>

```python
aws_access_keys: VaultSecretsRotatingSecretAwsAccessKeysOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference">VaultSecretsRotatingSecretAwsAccessKeysOutputReference</a>

---

##### `gcp_service_account_key`<sup>Required</sup> <a name="gcp_service_account_key" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKey"></a>

```python
gcp_service_account_key: VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference">VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference</a>

---

##### `mongodb_atlas_user`<sup>Required</sup> <a name="mongodb_atlas_user" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUser"></a>

```python
mongodb_atlas_user: VaultSecretsRotatingSecretMongodbAtlasUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference">VaultSecretsRotatingSecretMongodbAtlasUserOutputReference</a>

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `twilio_api_key`<sup>Required</sup> <a name="twilio_api_key" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKey"></a>

```python
twilio_api_key: VaultSecretsRotatingSecretTwilioApiKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference">VaultSecretsRotatingSecretTwilioApiKeyOutputReference</a>

---

##### `app_name_input`<sup>Optional</sup> <a name="app_name_input" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appNameInput"></a>

```python
app_name_input: str
```

- *Type:* str

---

##### `aws_access_keys_input`<sup>Optional</sup> <a name="aws_access_keys_input" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeysInput"></a>

```python
aws_access_keys_input: typing.Union[IResolvable, VaultSecretsRotatingSecretAwsAccessKeys]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a>]

---

##### `gcp_service_account_key_input`<sup>Optional</sup> <a name="gcp_service_account_key_input" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKeyInput"></a>

```python
gcp_service_account_key_input: typing.Union[IResolvable, VaultSecretsRotatingSecretGcpServiceAccountKey]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a>]

---

##### `integration_name_input`<sup>Optional</sup> <a name="integration_name_input" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationNameInput"></a>

```python
integration_name_input: str
```

- *Type:* str

---

##### `mongodb_atlas_user_input`<sup>Optional</sup> <a name="mongodb_atlas_user_input" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUserInput"></a>

```python
mongodb_atlas_user_input: typing.Union[IResolvable, VaultSecretsRotatingSecretMongodbAtlasUser]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `rotation_policy_name_input`<sup>Optional</sup> <a name="rotation_policy_name_input" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyNameInput"></a>

```python
rotation_policy_name_input: str
```

- *Type:* str

---

##### `secret_provider_input`<sup>Optional</sup> <a name="secret_provider_input" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProviderInput"></a>

```python
secret_provider_input: str
```

- *Type:* str

---

##### `twilio_api_key_input`<sup>Optional</sup> <a name="twilio_api_key_input" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKeyInput"></a>

```python
twilio_api_key_input: typing.Union[IResolvable, VaultSecretsRotatingSecretTwilioApiKey]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a>]

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appName"></a>

```python
app_name: str
```

- *Type:* str

---

##### `integration_name`<sup>Required</sup> <a name="integration_name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationName"></a>

```python
integration_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `rotation_policy_name`<sup>Required</sup> <a name="rotation_policy_name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyName"></a>

```python
rotation_policy_name: str
```

- *Type:* str

---

##### `secret_provider`<sup>Required</sup> <a name="secret_provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProvider"></a>

```python
secret_provider: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsRotatingSecretAwsAccessKeys <a name="VaultSecretsRotatingSecretAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_rotating_secret

vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys(
  iam_username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys.property.iamUsername">iam_username</a></code> | <code>str</code> | AWS IAM username to rotate the access keys for. |

---

##### `iam_username`<sup>Required</sup> <a name="iam_username" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys.property.iamUsername"></a>

```python
iam_username: str
```

- *Type:* str

AWS IAM username to rotate the access keys for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#iam_username VaultSecretsRotatingSecret#iam_username}

---

### VaultSecretsRotatingSecretConfig <a name="VaultSecretsRotatingSecretConfig" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_rotating_secret

vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_name: str,
  integration_name: str,
  name: str,
  rotation_policy_name: str,
  secret_provider: str,
  aws_access_keys: VaultSecretsRotatingSecretAwsAccessKeys = None,
  gcp_service_account_key: VaultSecretsRotatingSecretGcpServiceAccountKey = None,
  mongodb_atlas_user: VaultSecretsRotatingSecretMongodbAtlasUser = None,
  project_id: str = None,
  twilio_api_key: VaultSecretsRotatingSecretTwilioApiKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.appName">app_name</a></code> | <code>str</code> | Vault Secrets application name that owns the secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.integrationName">integration_name</a></code> | <code>str</code> | The Vault Secrets integration name with the capability to manage the secret's lifecycle. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.name">name</a></code> | <code>str</code> | The Vault Secrets secret name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.rotationPolicyName">rotation_policy_name</a></code> | <code>str</code> | Name of the rotation policy that governs the rotation of the secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.secretProvider">secret_provider</a></code> | <code>str</code> | The third party platform the dynamic credentials give access to. One of `aws` or `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.awsAccessKeys">aws_access_keys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a></code> | AWS configuration to manage the access key rotation for the given IAM user. Required if `secret_provider` is `aws`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.gcpServiceAccountKey">gcp_service_account_key</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a></code> | GCP configuration to manage the service account key rotation for the given service account. Required if `secret_provider` is `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.mongodbAtlasUser">mongodb_atlas_user</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a></code> | MongoDB Atlas configuration to manage the user password rotation on the given database. Required if `secret_provider` is `mongodb_atlas`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.projectId">project_id</a></code> | <code>str</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.twilioApiKey">twilio_api_key</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a></code> | Twilio configuration to manage the api key rotation on the given account. Required if `secret_provider` is `twilio`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.appName"></a>

```python
app_name: str
```

- *Type:* str

Vault Secrets application name that owns the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#app_name VaultSecretsRotatingSecret#app_name}

---

##### `integration_name`<sup>Required</sup> <a name="integration_name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.integrationName"></a>

```python
integration_name: str
```

- *Type:* str

The Vault Secrets integration name with the capability to manage the secret's lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#integration_name VaultSecretsRotatingSecret#integration_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The Vault Secrets secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#name VaultSecretsRotatingSecret#name}

---

##### `rotation_policy_name`<sup>Required</sup> <a name="rotation_policy_name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.rotationPolicyName"></a>

```python
rotation_policy_name: str
```

- *Type:* str

Name of the rotation policy that governs the rotation of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#rotation_policy_name VaultSecretsRotatingSecret#rotation_policy_name}

---

##### `secret_provider`<sup>Required</sup> <a name="secret_provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.secretProvider"></a>

```python
secret_provider: str
```

- *Type:* str

The third party platform the dynamic credentials give access to. One of `aws` or `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#secret_provider VaultSecretsRotatingSecret#secret_provider}

---

##### `aws_access_keys`<sup>Optional</sup> <a name="aws_access_keys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.awsAccessKeys"></a>

```python
aws_access_keys: VaultSecretsRotatingSecretAwsAccessKeys
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a>

AWS configuration to manage the access key rotation for the given IAM user. Required if `secret_provider` is `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#aws_access_keys VaultSecretsRotatingSecret#aws_access_keys}

---

##### `gcp_service_account_key`<sup>Optional</sup> <a name="gcp_service_account_key" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.gcpServiceAccountKey"></a>

```python
gcp_service_account_key: VaultSecretsRotatingSecretGcpServiceAccountKey
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a>

GCP configuration to manage the service account key rotation for the given service account. Required if `secret_provider` is `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#gcp_service_account_key VaultSecretsRotatingSecret#gcp_service_account_key}

---

##### `mongodb_atlas_user`<sup>Optional</sup> <a name="mongodb_atlas_user" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.mongodbAtlasUser"></a>

```python
mongodb_atlas_user: VaultSecretsRotatingSecretMongodbAtlasUser
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a>

MongoDB Atlas configuration to manage the user password rotation on the given database. Required if `secret_provider` is `mongodb_atlas`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#mongodb_atlas_user VaultSecretsRotatingSecret#mongodb_atlas_user}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#project_id VaultSecretsRotatingSecret#project_id}

---

##### `twilio_api_key`<sup>Optional</sup> <a name="twilio_api_key" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.twilioApiKey"></a>

```python
twilio_api_key: VaultSecretsRotatingSecretTwilioApiKey
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a>

Twilio configuration to manage the api key rotation on the given account. Required if `secret_provider` is `twilio`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#twilio_api_key VaultSecretsRotatingSecret#twilio_api_key}

---

### VaultSecretsRotatingSecretGcpServiceAccountKey <a name="VaultSecretsRotatingSecretGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_rotating_secret

vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey(
  service_account_email: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | GCP service account email to impersonate. |

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

GCP service account email to impersonate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#service_account_email VaultSecretsRotatingSecret#service_account_email}

---

### VaultSecretsRotatingSecretMongodbAtlasUser <a name="VaultSecretsRotatingSecretMongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_rotating_secret

vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser(
  database_name: str,
  project_id: str,
  roles: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.databaseName">database_name</a></code> | <code>str</code> | MongoDB Atlas database or cluster name to rotate the username and password for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.projectId">project_id</a></code> | <code>str</code> | MongoDB Atlas project ID to rotate the username and password for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.roles">roles</a></code> | <code>typing.List[str]</code> | MongoDB Atlas roles to assign to the rotating user. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

MongoDB Atlas database or cluster name to rotate the username and password for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#database_name VaultSecretsRotatingSecret#database_name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

MongoDB Atlas project ID to rotate the username and password for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#project_id VaultSecretsRotatingSecret#project_id}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

MongoDB Atlas roles to assign to the rotating user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#roles VaultSecretsRotatingSecret#roles}

---

### VaultSecretsRotatingSecretTwilioApiKey <a name="VaultSecretsRotatingSecretTwilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_rotating_secret

vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey()
```


## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsRotatingSecretAwsAccessKeysOutputReference <a name="VaultSecretsRotatingSecretAwsAccessKeysOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_rotating_secret

vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsernameInput">iam_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsername">iam_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iam_username_input`<sup>Optional</sup> <a name="iam_username_input" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsernameInput"></a>

```python
iam_username_input: str
```

- *Type:* str

---

##### `iam_username`<sup>Required</sup> <a name="iam_username" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsername"></a>

```python
iam_username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VaultSecretsRotatingSecretAwsAccessKeys]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a>]

---


### VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference <a name="VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_rotating_secret

vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VaultSecretsRotatingSecretGcpServiceAccountKey]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a>]

---


### VaultSecretsRotatingSecretMongodbAtlasUserOutputReference <a name="VaultSecretsRotatingSecretMongodbAtlasUserOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_rotating_secret

vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VaultSecretsRotatingSecretMongodbAtlasUser]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a>]

---


### VaultSecretsRotatingSecretTwilioApiKeyOutputReference <a name="VaultSecretsRotatingSecretTwilioApiKeyOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_rotating_secret

vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VaultSecretsRotatingSecretTwilioApiKey]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a>]

---



