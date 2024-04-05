# `iamWorkloadIdentityProvider` Submodule <a name="`iamWorkloadIdentityProvider` Submodule" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityProvider <a name="IamWorkloadIdentityProvider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider hcp_iam_workload_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import iam_workload_identity_provider

iamWorkloadIdentityProvider.IamWorkloadIdentityProvider(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  conditional_access: str,
  name: str,
  service_principal: str,
  aws: IamWorkloadIdentityProviderAws = None,
  description: str = None,
  oidc: IamWorkloadIdentityProviderOidc = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.conditionalAccess">conditional_access</a></code> | <code>str</code> | conditional_access is a hashicorp/go-bexpr string that is evaluated when exchanging tokens. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.name">name</a></code> | <code>str</code> | The workload identity provider's name. Ideally, this should be descriptive of the workload being federated. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.servicePrincipal">service_principal</a></code> | <code>str</code> | The service principal's resource name for which the workload identity provider will be created for. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.aws">aws</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#aws IamWorkloadIdentityProvider#aws}. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the workload identity provider. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#oidc IamWorkloadIdentityProvider#oidc}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `conditional_access`<sup>Required</sup> <a name="conditional_access" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.conditionalAccess"></a>

- *Type:* str

conditional_access is a hashicorp/go-bexpr string that is evaluated when exchanging tokens.

It restricts which upstream identities are allowed to access the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#conditional_access IamWorkloadIdentityProvider#conditional_access}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.name"></a>

- *Type:* str

The workload identity provider's name. Ideally, this should be descriptive of the workload being federated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#name IamWorkloadIdentityProvider#name}

---

##### `service_principal`<sup>Required</sup> <a name="service_principal" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.servicePrincipal"></a>

- *Type:* str

The service principal's resource name for which the workload identity provider will be created for.

Only service principals created within a project are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#service_principal IamWorkloadIdentityProvider#service_principal}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.aws"></a>

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#aws IamWorkloadIdentityProvider#aws}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.description"></a>

- *Type:* str

A description for the workload identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#description IamWorkloadIdentityProvider#description}

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.Initializer.parameter.oidc"></a>

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#oidc IamWorkloadIdentityProvider#oidc}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putAws">put_aws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putOidc">put_oidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetAws">reset_aws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOidc">reset_oidc</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws` <a name="put_aws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putAws"></a>

```python
def put_aws(
  account_id: str
) -> None
```

###### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putAws.parameter.accountId"></a>

- *Type:* str

The AWS Account ID that is allowed to exchange workload identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#account_id IamWorkloadIdentityProvider#account_id}

---

##### `put_oidc` <a name="put_oidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putOidc"></a>

```python
def put_oidc(
  issuer_uri: str,
  allowed_audiences: typing.List[str] = None
) -> None
```

###### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putOidc.parameter.issuerUri"></a>

- *Type:* str

The URL of the OIDC Issuer that is allowed to exchange workload identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#issuer_uri IamWorkloadIdentityProvider#issuer_uri}

---

###### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.putOidc.parameter.allowedAudiences"></a>

- *Type:* typing.List[str]

allowed_audiences is the set of audiences set on the access token that are allowed to exchange identities.

The access token must have an audience that is contained in this set. If no audience is set, the default allowed audience will be the resource name of the WorkloadIdentityProvider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#allowed_audiences IamWorkloadIdentityProvider#allowed_audiences}

---

##### `reset_aws` <a name="reset_aws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetAws"></a>

```python
def reset_aws() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_oidc` <a name="reset_oidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.resetOidc"></a>

```python
def reset_oidc() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IamWorkloadIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import iam_workload_identity_provider

iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import iam_workload_identity_provider

iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import iam_workload_identity_provider

iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import iam_workload_identity_provider

iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IamWorkloadIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamWorkloadIdentityProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamWorkloadIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference">IamWorkloadIdentityProviderAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference">IamWorkloadIdentityProviderOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.awsInput">aws_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccessInput">conditional_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidcInput">oidc_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipalInput">service_principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccess">conditional_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipal">service_principal</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.aws"></a>

```python
aws: IamWorkloadIdentityProviderAwsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference">IamWorkloadIdentityProviderAwsOutputReference</a>

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidc"></a>

```python
oidc: IamWorkloadIdentityProviderOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference">IamWorkloadIdentityProviderOidcOutputReference</a>

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `aws_input`<sup>Optional</sup> <a name="aws_input" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.awsInput"></a>

```python
aws_input: typing.Union[IResolvable, IamWorkloadIdentityProviderAws]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>]

---

##### `conditional_access_input`<sup>Optional</sup> <a name="conditional_access_input" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccessInput"></a>

```python
conditional_access_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oidc_input`<sup>Optional</sup> <a name="oidc_input" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.oidcInput"></a>

```python
oidc_input: typing.Union[IResolvable, IamWorkloadIdentityProviderOidc]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>]

---

##### `service_principal_input`<sup>Optional</sup> <a name="service_principal_input" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipalInput"></a>

```python
service_principal_input: str
```

- *Type:* str

---

##### `conditional_access`<sup>Required</sup> <a name="conditional_access" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.conditionalAccess"></a>

```python
conditional_access: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_principal`<sup>Required</sup> <a name="service_principal" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.servicePrincipal"></a>

```python
service_principal: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityProviderAws <a name="IamWorkloadIdentityProviderAws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import iam_workload_identity_provider

iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws(
  account_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws.property.accountId">account_id</a></code> | <code>str</code> | The AWS Account ID that is allowed to exchange workload identities. |

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The AWS Account ID that is allowed to exchange workload identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#account_id IamWorkloadIdentityProvider#account_id}

---

### IamWorkloadIdentityProviderConfig <a name="IamWorkloadIdentityProviderConfig" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import iam_workload_identity_provider

iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  conditional_access: str,
  name: str,
  service_principal: str,
  aws: IamWorkloadIdentityProviderAws = None,
  description: str = None,
  oidc: IamWorkloadIdentityProviderOidc = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.conditionalAccess">conditional_access</a></code> | <code>str</code> | conditional_access is a hashicorp/go-bexpr string that is evaluated when exchanging tokens. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.name">name</a></code> | <code>str</code> | The workload identity provider's name. Ideally, this should be descriptive of the workload being federated. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.servicePrincipal">service_principal</a></code> | <code>str</code> | The service principal's resource name for which the workload identity provider will be created for. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#aws IamWorkloadIdentityProvider#aws}. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.description">description</a></code> | <code>str</code> | A description for the workload identity provider. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#oidc IamWorkloadIdentityProvider#oidc}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `conditional_access`<sup>Required</sup> <a name="conditional_access" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.conditionalAccess"></a>

```python
conditional_access: str
```

- *Type:* str

conditional_access is a hashicorp/go-bexpr string that is evaluated when exchanging tokens.

It restricts which upstream identities are allowed to access the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#conditional_access IamWorkloadIdentityProvider#conditional_access}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The workload identity provider's name. Ideally, this should be descriptive of the workload being federated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#name IamWorkloadIdentityProvider#name}

---

##### `service_principal`<sup>Required</sup> <a name="service_principal" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.servicePrincipal"></a>

```python
service_principal: str
```

- *Type:* str

The service principal's resource name for which the workload identity provider will be created for.

Only service principals created within a project are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#service_principal IamWorkloadIdentityProvider#service_principal}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.aws"></a>

```python
aws: IamWorkloadIdentityProviderAws
```

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#aws IamWorkloadIdentityProvider#aws}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the workload identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#description IamWorkloadIdentityProvider#description}

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderConfig.property.oidc"></a>

```python
oidc: IamWorkloadIdentityProviderOidc
```

- *Type:* <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#oidc IamWorkloadIdentityProvider#oidc}.

---

### IamWorkloadIdentityProviderOidc <a name="IamWorkloadIdentityProviderOidc" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import iam_workload_identity_provider

iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc(
  issuer_uri: str,
  allowed_audiences: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.issuerUri">issuer_uri</a></code> | <code>str</code> | The URL of the OIDC Issuer that is allowed to exchange workload identities. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | allowed_audiences is the set of audiences set on the access token that are allowed to exchange identities. |

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

The URL of the OIDC Issuer that is allowed to exchange workload identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#issuer_uri IamWorkloadIdentityProvider#issuer_uri}

---

##### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

allowed_audiences is the set of audiences set on the access token that are allowed to exchange identities.

The access token must have an audience that is contained in this set. If no audience is set, the default allowed audience will be the resource name of the WorkloadIdentityProvider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/iam_workload_identity_provider#allowed_audiences IamWorkloadIdentityProvider#allowed_audiences}

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityProviderAwsOutputReference <a name="IamWorkloadIdentityProviderAwsOutputReference" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import iam_workload_identity_provider

iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAwsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamWorkloadIdentityProviderAws]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderAws">IamWorkloadIdentityProviderAws</a>]

---


### IamWorkloadIdentityProviderOidcOutputReference <a name="IamWorkloadIdentityProviderOidcOutputReference" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import iam_workload_identity_provider

iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resetAllowedAudiences">reset_allowed_audiences</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_audiences` <a name="reset_allowed_audiences" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.resetAllowedAudiences"></a>

```python
def reset_allowed_audiences() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiencesInput">allowed_audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUriInput">issuer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUri">issuer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_audiences_input`<sup>Optional</sup> <a name="allowed_audiences_input" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiencesInput"></a>

```python
allowed_audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_uri_input`<sup>Optional</sup> <a name="issuer_uri_input" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUriInput"></a>

```python
issuer_uri_input: str
```

- *Type:* str

---

##### `allowed_audiences`<sup>Required</sup> <a name="allowed_audiences" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidcOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamWorkloadIdentityProviderOidc]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.iamWorkloadIdentityProvider.IamWorkloadIdentityProviderOidc">IamWorkloadIdentityProviderOidc</a>]

---



